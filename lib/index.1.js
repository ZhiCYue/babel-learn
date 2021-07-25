import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

let Test = /*#__PURE__*/function () {
  function Test(name) {
    _classCallCheck(this, Test);

    this.name = name;
  }

  _createClass(Test, [{
    key: "logger",
    value: function logger() {
      console.log("Hello", this.name);
    }
  }]);

  return Test;
}();