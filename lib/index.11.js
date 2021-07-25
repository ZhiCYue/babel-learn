import _awaitAsyncGenerator from "@babel/runtime/helpers/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/wrapAsyncGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function agf() {
  return _agf.apply(this, arguments);
}

function _agf() {
  _agf = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _awaitAsyncGenerator(1);

        case 2:
          _context.next = 4;
          return 2;

        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _agf.apply(this, arguments);
}

var gen = agf();
gen.next().then(res => console.log(res)); // { value: 2, done: false }