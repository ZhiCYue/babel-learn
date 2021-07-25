function _asyncIterator(iterable) { 
  var method; 
  if (typeof Symbol !== "undefined") { 
    if (Symbol.asyncIterator) { 
      method = iterable[Symbol.asyncIterator]; 
      if (method != null) 
      return method.call(iterable); 
    } 
    if (Symbol.iterator) { method = iterable[Symbol.iterator]; 
      if (method != null) 
      return method.call(iterable); 
    } 
  } 
  throw new TypeError("Object is not async iterable"); 
}

async function f() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;

  var _iteratorError;

  try {
    for (var _iterator = _asyncIterator(y), _step, _value; _step = await _iterator.next(), _iteratorNormalCompletion = _step.done, _value = await _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
      let x = _value;
      g(x);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        await _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}