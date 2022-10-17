// 示例一
@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}

// 示例二
// @isTestable(true)
// class MyClass {}

// function isTestable(value) {
//   return function decorator(target) {
//     target.isTestable = value;
//   };
// }