(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./code/foo"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./code/foo"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Foo);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_foo) {
  "use strict";

  _foo = _interopRequireDefault(_foo);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _foo.default.say();
});