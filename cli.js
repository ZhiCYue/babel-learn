const fs = require('fs');
const path = require('path');

function _core() {
    const data = require("@babel/core");

    _core = function () {
        return data;
    };

    return data;
}

const transform = function (file, plugin, force = false) {
    if (fs.existsSync(`lib/${file}`) && !force) return;

    const code = fs.readFileSync(path.resolve(__dirname, `src/${file}`));

    let plugins = [];
    if (typeof plugin === 'string') {
        plugins.push(plugin);
    } else if (plugin instanceof Array) {
        plugins = plugin;
    }
    const res = _core().transform(code, {
        plugins
    });

    fs.writeFileSync(path.resolve(__dirname, `lib/${file}`), res.code);
}

// arrow
// transform('index.js', '@babel/plugin-transform-arrow-functions', true);


// class
transform('index.1.js', [
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-runtime',
]);

// // destructuring
// transform('index.2.js', '@babel/plugin-transform-destructuring');

// instanceof
transform('index.3.js', '@babel/plugin-transform-instanceof');

// // async-to-generator
transform('index.4.js', '@babel/plugin-transform-async-to-generator');

// transform-runtime
// transform('index.5.js', [
//     [
//         '@babel/plugin-transform-runtime',
//         {
//             "absoluteRuntime": false,
//             "corejs": 3,
//             "helpers": true,
//             "regenerator": true,
//             "useESModules": false
//         }
//     ]
// ], true);

// // transform-object-assign
// transform('index.6.js', '@babel/plugin-transform-object-assign');

// plugin-transform-object-super
transform('index.7.js', '@babel/plugin-transform-object-super');

transform('index.8.js', '@babel/plugin-transform-for-of');

transform('index.9.js', '@babel/plugin-proposal-async-generator-functions');
transform('index.10.js', '@babel/plugin-proposal-async-generator-functions');
transform('index.11.js', [
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime'
]);

// // modules
transform('modules/index.amd.js', '@babel/plugin-transform-modules-amd');
transform('modules/index.commonjs.js', '@babel/plugin-transform-modules-commonjs');
transform('modules/index.systemjs.js', '@babel/plugin-transform-modules-systemjs');
// transform('modules/index.umd.js', '@babel/plugin-transform-modules-umd', true);
// transform('modules/index.umd.1.js', [
//     [
//         '@babel/plugin-transform-modules-umd',
//         {
//             "globals": {
//                 "foo": "Foo"
//             }
//         }
//     ]
// ], true);

// // react
// transform('react/index.js', '@babel/plugin-transform-react-jsx');
// transform('react/index.1.js', '@babel/plugin-transform-react-jsx-compat', true);
// transform('react/index.2.js', [
//     [
//         "@babel/plugin-transform-react-jsx",
//         {
//             "throwIfNamespace": false, // defaults to true
//             "runtime": "classic", // defaults to classic
//             "importSource": "custom-jsx-library" // defaults to react
//         }
//     ]
// ], true);

// regenerator
// transform('regenerator.js', [
//     ['@babel/plugin-transform-regenerator', {
//         "asyncGenerators": true,
//         "generators": true,
//         "async": true
//     }]
// ], true);

// // runtime
transform('runtime.js', [
    '@babel/plugin-transform-regenerator',
    [
        '@babel/plugin-transform-runtime',
        // {
        //     "absoluteRuntime": false,
        //     "corejs": 2,
        //     "helpers": true,
        //     "regenerator": true,
        //     "useESModules": false,
        // }
    ],
    '@babel/plugin-transform-modules-commonjs'
], true);

// // typescript
// transform('typescript.js', '@babel/plugin-transform-typescript');
