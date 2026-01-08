// The Number() constructor creates Number objects. When called as a function, it returns primitive values of type Number.

const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
typeof a; // "object"
typeof b; // "number"
