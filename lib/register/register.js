require("@babel/register");

const _require = require("./index.js"),
      name = _require.name,
      say = _require.say;

console.log(name);