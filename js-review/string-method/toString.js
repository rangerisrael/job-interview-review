// Create a function that converts a decimal number to binary string
function convertToBinary(number) {
  // Your code here

  return number.toString(2);
}

// Test cases
console.log(convertToBinary(10));
// Should return: "1010"

console.log(convertToBinary(255));
// Should return: "11111111"

console.log(convertToBinary(8));
// Should return: "1000"

console.log(convertToBinary(15));
// Should return: "1111"

// Create a function that converts an array to a formatted string
// with commas and "and" before the last item
function formatList(items) {
  // Your code here
  return items.toString();
}

// Test cases
console.log(formatList(["apple", "banana", "orange"]));
// Should return: "apple, banana and orange"

console.log(formatList(["red", "blue"]));
// Should return: "red and blue"

console.log(formatList(["solo"]));
// Should return: "solo"

console.log(formatList(["bread", "milk", "eggs", "cheese"]));
// Should return: "bread, milk, eggs and cheese"
