doSomething();

function doSomething() {
  console.log("declaration function was hoisted");
}

const doSomethingExpression = function () {
  console.log("expression function not hoisted");
};

doSomethingExpression();

const lexicaldoSomething = () => {
  console.log("lexical function not hoisted");
};

lexicaldoSomething();
