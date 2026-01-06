// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// map(callbackFn)
// map(callbackFn, thisArg)

const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Expected output: Array [2, 8, 18, 32]
