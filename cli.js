const fs = require('fs');
const path = require('path');

const transform = function (file, plugin) {
    const code = fs.readFileSync(path.resolve(__dirname, `src/${file}`));

    const res = require("@babel/core").transform(code, {
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
