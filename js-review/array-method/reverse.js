// The reverse() method of Array instances reverses an array in place and returns the reference to the same array,
// the first array element now becoming the last, and the last array element becoming the first. In other words,
//  elements order in the array will be turned towards the direction opposite to that previously stated.

const array = ["one", "two", "three"];
console.log("array:", array);
// Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array:", array);
// Expected output: "array:" Array ["three", "two", "one"]
