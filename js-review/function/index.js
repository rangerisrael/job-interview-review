// CONCEPT: Different function types
// Declaration (hoisted)
function declaration() {
return "I'm hoisted!";
}
// Expression (not hoisted)
const expression = function() {
return "I'm not hoisted";
};
// Arrow function (lexical this)
const arrow = () => "I have lexical this";
// CONCEPT: Closures
function outer(x) {
return function inner(y) {
return x + y; // inner has access to x
};
}
const add5 = outer(5);
console.log(add5(3)); // 8