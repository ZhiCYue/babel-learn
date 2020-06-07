const babylon = require("babylon");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
  enter(path) {
    if (
      path.node.type === "Identifier" &&
      path.node.name === "n"
    ) {
      path.node.name = "x";
    }
  }
});

const sourceCode = generator(ast).code;
console.log(sourceCode);
