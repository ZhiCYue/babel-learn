var _class, _descriptor;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
// var Person = function(){
//   this.title = 'xx';
// }
//
// Person.prototype.name = 'name1';
// Person.prototype.getName = function(){
//   console.log(this)
// }
//
// var person = new Person();
// person.getName()

var decorator = function (target, name, descriptor) {
  console.log('enter decorator', target);
  return descriptor;
};
var decorator_get = function (target, name, descriptor) {
  console.log('enter decorator_get', target);
  var get = descriptor.get;
  // return descriptor;
  return {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('get ', this);
      return get.call(this);
    }
  };
};
let Person = (_class = class Person {
  constructor() {
    _initializerDefineProperty(this, "name", _descriptor, this);
    _defineProperty(this, "title", 'title1');
  }
  get age() {
    console.log('get age', this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [decorator], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'name1';
  }
}), _applyDecoratedDescriptor(_class.prototype, "age", [decorator_get], Object.getOwnPropertyDescriptor(_class.prototype, "age"), _class.prototype)), _class);
var person = new Person();
console.log(person.age);