const presets = [
  // [
  //   "@babel/env",
  //   {
  //     targets: {
  //       edge: "17",
  //       firefox: "60",
  //       chrome: "67",
  //       safari: "11.1",
  //     },
  //     "useBuiltIns": "entry",
  //     "corejs": 2
  //   },
  // ],
];

const plugins = [
  // [
  //   "@babel/plugin-transform-runtime",
  //     {
  //       "absoluteRuntime": false,
  //       "corejs": false,
  //       "helpers": true,
  //       "regenerator": true,
  //       "version": "7.0.0-beta.0"
  //     }
  // ]
];

module.exports = { presets, plugins };
