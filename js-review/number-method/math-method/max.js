// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
// Math.max()
// Math.max(value1)
// Math.max(value1, value2)
// Math.max(value1, value2, /* …, */ valueN)

console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array = [1, 3, 2];

console.log(Math.max(...array));
// Expected output: 3
