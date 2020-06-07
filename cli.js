const fs = require('fs');
const path = require('path');

function _core() {
    const data = require("@babel/core");

    _core = function () {
        return data;
    };

    return data;
}

const transform = function (file, plugin) {
    if (fs.existsSync(`lib/${file}`)) return;

    const code = fs.readFileSync(path.resolve(__dirname, `src/${file}`));

    const res = _core().transform(code, {
        plugins: [
            plugin
        ]
    });

    fs.writeFileSync(path.resolve(__dirname, `lib/${file}`), res.code);
}

// class
transform('index.1.js', '@babel/plugin-transform-classes');

// destructuring
transform('index.2.js', '@babel/plugin-transform-destructuring');

// instanceof
transform('index.3.js', '@babel/plugin-transform-instanceof');

// async-to-generator
transform('index.4.js', '@babel/plugin-transform-async-to-generator');

// modules
transform('modules/index.amd.js', '@babel/plugin-transform-modules-amd');
transform('modules/index.commonjs.js', '@babel/plugin-transform-modules-commonjs');
transform('modules/index.systemjs.js', '@babel/plugin-transform-modules-systemjs');
transform('modules/index.umd.js', '@babel/plugin-transform-modules-umd');

// react
transform('react/index.js', '@babel/plugin-transform-react-jsx');

// regenerator
transform('regenerator.js', '@babel/plugin-transform-regenerator');

// runtime
transform('runtime.js', '@babel/plugin-transform-runtime');

// typescript
transform('typescript.js', '@babel/plugin-transform-typescript');