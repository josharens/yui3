const path = require('node:path');
const fs = require('node:fs/promises');

const { run: jscodeshift } = require('jscodeshift/dist/Runner.js');

const yui3Json = require('./yui3.json');

const paths = {
  src: path.join(__dirname, '..', 'src'),
  dest: path.join(__dirname, 'esm'),
};

const yuiBootstrapModules = [
  'yui-pre-rollup',
  'yui-base-pre-rollup',
  'yui-nodejs-pre-rollup',
  'yui-core',
];

const defaultFindReplace = {
  '@YUIGLOBALVAR@': 'YUI',
  '@YUIVAR@': 'Y',
  'var YUI': 'var YUI = globalThis.YUI',
};

async function main() {
  console.log('==> Setting up...');
  await createEmptyDir(paths.dest);

  console.log('==> Computing build config...');
  const buildConfig = await getBuildConfig(paths.src);

  console.log('==> Building modules...');
  for (const [ key, config ] of Object.entries(buildConfig.builds)) {
    const name = getModuleName(key, buildConfig.builds);

    await build({
      name,
      config,
      dest: paths.dest,
    });
  }

  console.log('==> Building rollups...');
  for (const [ key, config ] of Object.entries(buildConfig.rollups)) {
    const name = getModuleName(key, buildConfig.rollups);

    await rollup({
      name,
      config,
      dest: paths.dest,
    });
  }

  console.log('==> Transforming `use()` calls...');
  await jscodeshift(
    path.resolve(__dirname, 'transformYuiUseCalls.cjs'),
    [paths.dest],
    {
      extensions: 'mjs',
      // ignorePattern: '*-(coverage|debug|min).js',
      // dry: true, // todo
      // print: true,
      // verbose: 2,
      failOnError: true, // todo, does this work?
    }
  );

  console.log('==> Transforming bootstrap modules...');
  await jscodeshift(
    path.resolve(__dirname, 'transformYuiBootstrapModules.cjs'),
    yuiBootstrapModules.map((module) => path.join(paths.dest, `${module}.mjs`)),
    {
      extensions: 'mjs',
      // ignorePattern: '*-(coverage|debug|min).js',
      // dry: true, // todo
      // print: true,
      verbose: 2,
      failOnError: true, // todo, does this work?
    }
  );

  console.log('==> Done!');
}

function getModuleName(key, config) {
  return config[key]?.basefilename || key;
}

function getModuleIdent(name) {
  return `_${name.replaceAll('-', '_')}`;
}

async function createEmptyDir(path) {
  try {
    await fs.access(path);
    await fs.rm(path, { recursive: true });
  } catch {
    // ignore
  }

  try {
    await fs.mkdir(path, { recursive: true });
  } catch (err) {
    throw new Error(`Failed to create directory: ${path}`, { cause: err });
  }
}

async function build({ name, config, dest }) {
  const ident = getModuleIdent(name);

  let contents = [`
export default {
  name: '${name}',
  load: _load_module${ident},
};
  `];

  const buildFiles = await getBuildFiles(config);

  for (const file of buildFiles.prepend) {
    contents.push(`\n\t/** source: ${path.basename(file)} */\n`);
    contents.push(await fs.readFile(file, 'utf8'));
  }

  contents.push(`function _load_module${ident}(Y, NAME) {\n`);

  for (const dependency of config.dependencies?.values() || []) {
    const depIdent = getModuleIdent(dependency);

    contents.unshift(`import ${depIdent} from './${dependency}.mjs';`);
    contents.push(`\tY.use(${depIdent});`);
  }

  for (const file of buildFiles.js) {
    contents.push(`\n\t/** source: ${path.basename(file)} */\n`);
    contents.push(await fs.readFile(file, 'utf8'));
  }

  contents.push('}\n');

  for (const file of buildFiles.append) {
    contents.push(`\n\t/** source: ${path.basename(file)} */\n`);
    contents.push(await fs.readFile(file, 'utf8'));
  }

  contents = contents.join('\n');

  const replaceConfig = {
    ...defaultFindReplace,
    ...config.replace,
  };

  for (const [ find, replace ] of Object.entries(replaceConfig)) {
    contents = contents.replaceAll(find, replace);
  }

  // TODO: Strip `y.log()` calls (global shifter regex).

  const handle = await fs.open(path.join(dest, `${name}.mjs`), 'w');
  await handle.write(contents);
  await handle.close();
}

async function rollup({ name, config, dest }) {
  const ident = getModuleIdent(name);

  let contents = [`
export default {
  name: '${name}',
  load: _load_rollup${ident},
};

function _load_rollup${ident}(Y, NAME) {
  `];

  for (const module of config.files) {
    const ident = getModuleIdent(module);

    contents.unshift(`import ${ident} from './${module}.mjs';`);
    contents.push(`\tY.use(${ident});`);
  }

  contents.push('}\n');
  contents = contents.join('\n');

  const handle = await fs.open(path.join(dest, `${name}.mjs`), 'w');
  await handle.write(contents);
  await handle.close();
}

async function getBuildConfig(root) {
  const config = {
    builds: {},
    rollups: {},
  };

  // Note: currently searches only one level deep, and doesn't search for a
  // `build.json` in the root directory.
  for (const entry of await fs.readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }

    const buildJsonPath = path.join(root, entry.name, 'build.json');

    try {
      await fs.access(buildJsonPath);
    } catch {
      continue;
    }

    const buildJson = require(buildJsonPath);

    for (const [ key, build ] of Object.entries(buildJson.builds)) {
      const name = getModuleName(key, buildJson.builds);

      // Check for rollups defined in `meta.json` but not in `build.json`???
      if (!config.rollups[entry.name]) {
        let meta;

        try {
          meta = require(path.join(root, entry.name, 'meta', `${entry.name}.json`));
        } catch {
          // ignore
        }

        if (meta && meta[entry.name]?.use && !build.rollups?.[entry.name]) {
          console.log(`Creating ${entry.name} rollup record from meta json`);
          config.rollups[entry.name] = {
            files: meta[entry.name].use,
          };
        }
      }

      build.dependencies = new Set([
        ...yui3Json[name]?.optional || [], // TODO: always require optional modules for now.
        ...yui3Json[name]?.requires || [],
      ]);

      build.dir = path.join(root, entry.name);
    }

    Object.assign(config.builds, buildJson.builds);
    Object.assign(config.rollups, buildJson.rollups);
  }

  for (const [ key, rollup ] of Object.entries(config.rollups)) {
    const name = getModuleName(key, config.rollups);

    // Is this is a rollup that includes and replaces a module with the same
    // name? For example, the pre-rollup `yui-base` module becomes a `yui-base`
    // rollup with several other modules included.
    if (!rollup.files.includes(name)) {
      continue;
    }

    const preRollupName = `${name}-pre-rollup`;

    config.builds[preRollupName] = {
      ...config.builds[name],
      basefilename: preRollupName,
    };

    rollup.files.splice(
      rollup.files.findIndex((file) => file === name),
      1,
      preRollupName,
    );

    for (const module of rollup.files) {
      // Some rollups create circular dependencies, for example the `get`
      // module depends on the pre-rollup `yui-base` module, but `yui-base`
      // becomes a rollup that then includes `get`. As an optimization, ESM
      // rollups import their includes instead of duplicating them. So in this
      // case we need to create two `yui-base` modules. One will become the
      // `yui-base` rollup which will then import the pre-rollup `yui-base`
      // module (along with the rest if its includes), and `get` can also
      // import the pre-rollup `yui-base` module. We'll track which modules
      // have been loaded at runtime to ensure that the pre-rollup `yui-base`
      // module is loaded only once.
      if (config.builds[module].dependencies.has(name)) {
        config.builds[module].dependencies.delete(name);
        config.builds[module].dependencies.add(preRollupName);
      }
    }
  }

  return config;
}

async function getBuildFiles(config) {
  const files = {
    prepend: [],
    js: [],
    append: [],
  };

  for (const prepend of config.prependfiles || []) {
    files.prepend.push(path.join(config.dir, prepend));
  }

  for (const js of config.jsfiles || []) {
    if (js.startsWith('js/')) {
      files.js.push(path.join(config.dir, js));
    } else {
      files.js.push(path.join(config.dir, 'js', js));
    }
  }

  for (const append of config.appendfiles || []) {
    files.js.push(path.join(config.dir, append));
  }

  return files;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
