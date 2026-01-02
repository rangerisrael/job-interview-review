// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

const array = ["a", "b", "c"];

const iterator = array.entries();

console.log(iterator.next().value);
// Expected output: Array [0, "a"]

console.log(iterator.next().value);
// Expected output: Array [1, "b"]
console.log("Item of array");

const arrayEntries = array.entries();

for (const [element, index] of arrayEntries) {
  console.log(element, index);
}

for (const item of Array.prototype.entries.call(array)) {
  console.log(item);
}

// Problem 1: Product Inventory Iterator
// Create a function that takes an array of product names and returns an object with two methods:

// getNext() - returns the next product with its position
// hasMore() - checks if there are more products

console.log("Challenges entries");

function createInventoryIterator(product) {
  let nextValue = product.entries();
  let currentIndex = 0;
  let totalength = product.length;

  function getNext() {
    let iterator = nextValue.next();
    if (!iterator.done) {
      currentIndex++;
      return { position: iterator.value[0], product: iterator.value[1] };
    }

    return null;
  }

  function hasMore() {
    return currentIndex < totalength;
  }

  return { getNext, hasMore };
}

const products = ["Laptop", "Mouse", "Keyboard"];
const inventory = createInventoryIterator(products);

console.log(inventory.hasMore()); // true (0 < 3)
console.log(inventory.getNext()); // { position: 0, product: 'Laptop' }
console.log(inventory.hasMore()); // true (1 < 3)
console.log(inventory.getNext()); // { position: 1, product: 'Mouse' }
console.log(inventory.getNext()); // { position: 2, product: 'Keyboard' }
console.log(inventory.hasMore()); // false (3 < 3)

// Problem 2: Swap Index and Value
// Write a function that takes an array and returns a new array where each element's index becomes its value, and its value becomes the index (only for the first occurrence of each value).
// javascript

function swapIndexValue(arr) {
  const items = arr.entries();
  let obj = [];

  for (const [key, value] of items) {
    obj.push([value, key]);
  }

  return obj;
}

// // Example
console.log(swapIndexValue(["x", "y", "z"]));

// Output: [['x', 0], ['y', 1], ['z', 2]]

console.log(swapIndexValue(["apple", "banana", "apple", "cherry"]));

// Output: [['apple', 0], ['banana', 1], ['cherry', 3]]
// Note: second 'apple' is skipped

// Problem 3: Find Missing Indices
// Create a function that takes an array and finds which indices are "missing" when you skip every nth element. Use entries() to track both index and value, and return an array of [index, value] pairs that were skipped.
// javascript
// Example
// findSkippedElements(["a", "b", "c", "d", "e", "f"], 2);
// // Skip every 2nd element (indices 1, 3, 5)
// // Output: [[1, 'b'], [3, 'd'], [5, 'f']]

// findSkippedElements([10, 20, 30, 40, 50], 3);
// // Skip every 3rd element (indices 2)
// // Output: [[2, 30]]
