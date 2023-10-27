const yuiProtoMethodsToRemove = {
  require: {
    removeCalls: false, // No `require()` calls 
  },
  _attach: {
    removeCalls: false, // All `_attach()` calls get removed by removing other methods.
  },
  add: {
    removeCalls: false, // No `add()` calls
  },
  _setup: {
    removeCalls: true,
  },
  _delayCallback: {
    removeCalls: false, // All `_delayCallback()` calls get removed by modifying `use()`
  },
  _use: {
    removeCalls: false, // All `_use()` calls get removed by modifying `use()`
  }
};

module.exports = function transformYuiBootstrapModules(file, api, options) {
  const j = api.jscodeshift;

  let source = removeYuiProtoMethods(j, j(file.source));
  source = rewriteYuiProtoUseMethod(j, j(source));

  return source;
}

function rewriteYuiProtoUseMethod(j, ast) {
  return ast
    .find(j.AssignmentExpression, {
      left: {
        name: 'proto',
      },
    })
    .find(j.ObjectExpression)
    .forEach((node) => {
      node.value.properties = node.value.properties.map((property) => {
        if (property.key.name === 'use' && property.value.type === 'FunctionExpression') {
          return j.property(
            'init', // kind
            j.identifier('use'),
            j.functionExpression(
              null, // id
              [ j.restElement(j.identifier('args')) ], // params
              j.blockStatement(
                j.template.statements`
                  const Y = this;

                  if (!Y._esModulesLoaded) {
                    Y._esModulesLoaded = new Set();
                  }

                  const modules = [];
                  let callback;

                  if (typeof args.at(-1) === 'function') {
                    callback = args.pop();
                  }

                  if (Array.isArray(args.at(0))) {
                    modules.push(...args.shift());
                  } else {
                    modules.push(...args);
                  }

                  for (const module of modules) {
                    if (Y._esModulesLoaded.has(module)) {
                      continue;
                    }

                    module.load(Y, ''); // TODO: name?

                    Y._esModulesLoaded.add(module);
                  }

                  callback?.(Y, ''); // TODO: name?
                `,
              ),
            ),
          );
        }

        return property;
      });
    })
    .toSource();
}

function removeYuiProtoMethods(j, ast) {
  let source = ast
    .find(j.AssignmentExpression, {
      left: {
        name: 'proto',
      },
    })
    .find(j.ObjectExpression)
    .forEach((node) => {
      node.value.properties = node.value.properties.filter((property) => {
        if (yuiProtoMethodsToRemove[property.key.name]) {
          return property.value.type !== 'FunctionExpression';
        }

        return true;
      });
    })
    .toSource();

  for (const [ method, config ] of Object.entries(yuiProtoMethodsToRemove)) {
    if (!config.removeCalls) {
      continue;
    }

    source = j(source)
      .find(j.CallExpression, {
        callee: {
          type: 'MemberExpression',
          property: {
            name: method,
          },
        },
      })
      .remove()
      .toSource();
  }

  return source;
}
