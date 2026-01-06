// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

const array = ["a", "b", "c"];
const iterator = array.keys();

const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
// Problem 1: Find Gaps in Sparse Array
// Create a function that takes a sparse array (array with empty slots) and returns an array of all indices that actually have values (not empty slots).
// javascript// Example

const sparse = [1, , , 4, , 6]; // Has empty slots at indices 1, 2, 4

console.log(findFilledIndices(sparse));

// Output: [0, 3, 5]

const another = ["a", "b", , "d", , , "g"];

console.log(findFilledIndices(another));

// Output: [0, 1, 3, 6]

function findFilledIndices(arr) {
  const sparseKeys = Object.keys(arr);
  const denseKeys = [...arr.keys()];
  console.log(sparseKeys);
}
