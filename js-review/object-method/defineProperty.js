const object = {};

Object.defineProperty(object, "age", {
  value: 42,
  writable: true,
});

object.age = 77;

console.log(object);
// Expected output: 77

const objects = {};

Object.defineProperties(objects, {
  user1: {
    // Property name
    value: { name: "Ken", age: 21 },
    writable: true,
  },
  user2: {
    // Property name
    value: { name: "Manny", age: 20 },
    writable: true,
  },
});

console.log(objects);
