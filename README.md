# babel-learn
plugin

通过插件，转换es6 语法的代码，将输出结构存放在lib 目录。

## 运行
`node cli.js`

## @babel/register

没有使用 register 时
```js
// run.js

// require('@babel/register');
require('./index');
```
执行：`node bar/run.js` 控制台报错。


使用 register 时
```js
// run.js

require('@babel/register');
require('./index');
```
执行：`node bar/run.js` 控制台输出：3

## plugin 示例
```js
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
transform('regenerator.js', '@babel/plugin-transform-regenerator', true);

// [runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
transform('runtime.js', [
        '@babel/plugin-transform-regenerator',
        [
            '@babel/plugin-transform-runtime', 
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "useESModules": false,
                "version": "7.0.0-beta.0"
            }
        ]
    ], true);

// typescript
transform('typescript.js', '@babel/plugin-transform-typescript');
```

## referance
[babel](https://babeljs.io/docs/en/)
