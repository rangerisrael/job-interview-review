// // The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

// Math.min()
// Math.min(value1)
// Math.min(value1, value2)
// Math.min(value1, value2, /* …, */ valueN)

console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array = [2, 3, 1];

console.log(Math.min(...array));
// Expected output: 1
