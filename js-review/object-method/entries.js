const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};
// if only entries only return array of 2Darray
const noMap = Object.entries(person);

//   ["name", "Albert"],
//   ["address", 23],
//   ["email", "dev.me@gmail.com"],
// ];
// entries convert to 2dArray to array itself
const data = Object.entries(person).map(([key, value]) => ({ key, value }));

console.log(data);

// [
//   { key: "name", value: "Albert" },
//   { key: "address", value: 23 },
//   { key: "email", value: "dev.me@gmail.com" },
// ];

// Object.entries() - 2 Problems
// Problem 1: Convert to String Pairs (Easy)
// Create a function entriesToStrings(obj) that converts each entry to a string in format "key: value".
// Examples:
console.log(entriesToStrings({ name: "Israel", age: 25 }));

// Output: ['name: Israel', 'age: 25']

console.log(entriesToStrings({ city: "Manila", country: "Philippines" }));

// Output: ['city: Manila', 'country: Philippines']

function entriesToStrings(obj) {
  // Write your code here
  return Object.entries(obj).map(([key, value]) => ({ [key]: value }));
}

console.log(swapKeysValues({ a: "1", b: "2", c: "3" }));

// Output: { '1': 'a', '2': 'b', '3': 'c' }

console.log(swapKeysValues({ name: "Israel", role: "developer" }));

// Output: { 'Israel': 'name', 'developer': 'role' }
function swapKeysValues(obj) {
  // Write your code here
  return Object.entries(obj).map(([key, value]) => ({ [value]: key }));
}
