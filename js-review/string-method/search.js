// Create a function that finds the position of the first number in a string
// Return the index position, or -1 if no number is found
function findFirstNumber(text) {
  // Your code here
  return text.search(/\d/);
}

// Test cases
console.log(findFirstNumber("Hello123World"));
// Should return: 5

console.log(findFirstNumber("Price is $99 only"));
// Should return: 10

console.log(findFirstNumber("No numbers here!"));
// Should return: -1

console.log(findFirstNumber("Room 42B"));
// Should return: 5

// Create a function that finds the position of the first special character
// Special characters are anything that's NOT a letter, number, or space
function findSpecialChar(text) {
  // Your code here
  return text.search(/[!@#$%^&*()]/);
}

// Test cases
console.log(findSpecialChar("Hello World!"));
// Should return: 11 (the "!" character)

console.log(findSpecialChar("user@example.com"));
// Should return: 4 (the "@" character)

console.log(findSpecialChar("Price: $50"));
// Should return: 6 (the "$" character)

console.log(findSpecialChar("No special chars"));
// Should return: -1 (no special characters found)

console.log(findSpecialChar("Test#123"));
// Should return: 4 (the "#" character)
