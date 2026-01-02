// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// copyWithin(target, start)
// copyWithin(target, start, end)

const array = ["a", "b", "c", "d", "e"];
//   index:     0    1    2    3    4
//negative:    -5    4   -3   -2   -1

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
//negative: -5  4 -3 -2 -1
// [1, 2, 3, 3, 4]

console.log("Challenges");

// Problem 1: Rotate Queue
// You're managing a task queue. Create a function that rotates the last n tasks to the front of the queue.

function rotateQueue(queue, n) {
  // Your code here
  // Use copyWithin() to move the last n elements to the front
  const getLength = queue.length - 1;

  return queue.copyWithin(0, getLength - n + 1);
}

// Test cases:
console.log(rotateQueue(["task1", "task2", "task3", "task4", "task5"], 2));
// Expected: ['task4', 'task5', 'task3', 'task4', 'task5']

console.log(rotateQueue([10, 20, 30, 40, 50], 3));
// Expected: [30, 40, 50, 40, 50]

// Problem 2: Shift Pattern
// Create a function that shifts elements to the right by n positions using copyWithin().

function shiftRight(arr, positions) {
  // Your code here
  // Shift all elements to the right by 'positions' spots
  //   2 paste start with 0 upto end until its fits on length
  return arr.copyWithin(positions);
}

// Test cases:
console.log(shiftRight([1, 2, 3, 4, 5], 2));
// Expected: [1, 2, 1, 2, 3]

console.log(shiftRight(["a", "b", "c", "d"], 1));
// Expected: ['a', 'a', 'b', 'c']

// Problem 3: Mirror Effect
// Create a function that copies the first half of an array over the second half.
function mirrorFirstHalf(arr) {
  // Your code here
  // Copy the first half to overwrite the second half
  let getHalf = arr.length / 2;

  return arr.copyWithin(getHalf);
}

// Test cases:
console.log(mirrorFirstHalf([1, 2, 3, 4, 5, 6]));
// Expected: [1, 2, 3, 1, 2, 3]

console.log(mirrorFirstHalf(["x", "y", "z", "a", "b", "c"]));
// Expected: ['x', 'y', 'z', 'x', 'y', 'z']
