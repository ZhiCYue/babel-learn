function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

let _obj = obj,
    x = _obj.x,
    y = _obj.y;

let _arr = arr,
    _arr2 = _toArray(_arr),
    a = _arr2[0],
    b = _arr2[1],
    rest = _arr2.slice(2);