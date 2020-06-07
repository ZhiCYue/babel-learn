# babel-learn
plugin

通过插件，转换es6 语法的代码，将输出结构存放在lib 目录。

## 源码和对应的处理插件
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
```

## 运行
`npm install`

`node cli.js`