const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
  printIntroduction() {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`;
  },
};

let newPerson = {
  name: "Nelson",
  address: 23,
  emailed: "wondderful@gmail.com",
};

// fromEntries  to 2D array to object
let entries = Object.entries(newPerson);
let cvto2DArray = Object.fromEntries(entries);

// to 2d to one array

let cvtoArray = entries.map(([key, value]) => ({ key, value }));
console.log(entries);
console.log(cvto2DArray);
console.log(cvtoArray);

// Problem 1: Array Pairs to Object (Easy)
// Create a function pairsToObject(pairs) that converts an array of [key, value] pairs into an object.

pairsToObject([
  ["name", "Israel"],
  ["age", 25],
]);
// Output: { name: 'Israel', age: 25 }

pairsToObject([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
// Output: { a: 1, b: 2, c: 3 }

function pairsToObject(pairs) {
  // Write your code here
  console.log(Object.fromEntries(pairs));
}

console.log(filterPositiveValues({ a: 5, b: -3, c: 10, d: -1 }));

// Output: { a: 5, c: 10 }

console.log(filterPositiveValues({ score1: 100, score2: 0, score3: 50 }));

// Output: { score1: 100, score3: 50 }

function filterPositiveValues(obj) {
  // Write your code here

  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value > 0) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
