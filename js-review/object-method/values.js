const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

console.log(Object.values(person));
// ["Albert", 23, "dev.me@gmail.com"];

// Object.values() - 2 Problems
// Problem 1: Sum All Values (Easy)
// Create a function sumValues(obj) that returns the sum of all numeric values in an object.
// Examples:
// javascript
sumValues({ apples: 5, bananas: 3, oranges: 7 });
// Output: 15

sumValues({ a: 10, b: 20, c: 30 });
// Output: 60

function sumValues(obj) {
  // Write your code here
  return Object.values(obj).reduce((acc, cur) => acc + cur, 0);
}

// Problem 2: Find Max Value (Medium)
// Create a function findMaxValue(obj) that returns the largest number from the object's values.
// Examples:

console.log(findMaxValue({ math: 95, english: 88, science: 92 }));

// Output: 95

console.log(findMaxValue({ price1: 100, price2: 250, price3: 75 }));

// Output: 250

function findMaxValue2(obj) {
  // Write your code here
  let getEntries = Object.entries(obj)
    .map(([, value]) => value)
    .reduce((a, b) => Math.max(a, b), 0);

  return getEntries;
}

function findMaxValue(obj) {
  // Write your code here
  let getMax = [];

  let getEntries = Object.entries(obj).map(([, value]) => value);

  getMax[0] = getEntries[0];

  for (const [key, value] of Object.entries(obj)) {
    if (value >= getMax[0]) {
      getMax[0] = `${key}: ${value}`;
    }
  }

  return getMax[0];
}
