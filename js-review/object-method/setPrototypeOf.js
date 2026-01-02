const obj = {};
const parent = { foo: "bar" };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.dir(obj);
console.log(obj.foo);
// Expected output: "bar"
