module.exports = function transformYuiUseCalls(file, api, options) {
  const j = api.jscodeshift;

  let ast = j(file.source).find(j.CallExpression, {
    callee: {
      property: {
        name: 'use',
      },
    },
  });

  if (!ast.length) {
    return file.source;
  }

  const modulesUsed = [];

  ast.replaceWith((node) => {
    const args = [];

    for (const arg of node.value.arguments) {
      if (arg.type !== 'Literal') {
        args.push(arg);
        continue;
      }

      const module = `_${arg.value.replaceAll('-', '_')}`;

      modulesUsed.push(module);

      args.push(j.identifier(module));
    }

    return j.callExpression(node.value.callee, args);
  });

  file.source = ast.toSource();

  const modulesImported = new Set();

  j(file.source)
    .find(j.ImportDeclaration)
    .forEach((node) => {
      for (specifier of node.value.specifiers) {
        modulesImported.add(specifier.local.name);
      }
    });

  const modulesToImport = [];

  for (const module of modulesUsed) {
    if (!modulesImported.has(module)) {
      modulesToImport.push(module);
    }
  }

  ast = j(file.source);
  const body = ast.get().value.program.body;

  for (const module of modulesToImport) {
    body.unshift(j.importDeclaration(
      [j.importDefaultSpecifier(j.identifier(`${module}`))],
      j.literal(`./${module.slice(1)}.mjs`),
    ));
  }

  return ast.toSource();
}
