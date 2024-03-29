function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { 
  try { 
    var info = gen[key](arg); 
    var value = info.value; 
  } catch (error) { 
    reject(error); 
    return; 
  } 
  if (info.done) { 
    resolve(value); 
  } else { 
    Promise.resolve(value).then(_next, _throw); 
  } 
}

function _asyncToGenerator(fn) { 
  return function () { 
    var self = this, args = arguments; 
    return new Promise(function (resolve, reject) { 
      var gen = fn.apply(self, args); 
      function _next(value) { 
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); 
      } 
      function _throw(err) { 
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); 
      } 
      _next(undefined); 
    }); 
  }; 
}

const bar = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    const v = yield 12;
    return v + 12;
  });

  return function bar() {
    return _ref.apply(this, arguments);
  };
}();

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = _asyncToGenerator(function* () {
    const res = yield bar();
    console.log(res);
  });
  return _foo.apply(this, arguments);
}

foo();