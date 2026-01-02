const person = {
  name: "Albert",
  age: 23,
  email: "test.me@gmail.com",
};

const object = Object.create(person);

const obj1 = {};
const obj2 = {};
const obj3 = Object.create(obj2);

console.log(obj1 == obj2);
console.log(Object.getPrototypeOf(object) == person);
console.log(Object.getPrototypeOf(obj3) == obj2);

console.dir(Object.getPrototypeOf(object));
// Expected output: true
