// Problem 1: Password Masker
//
// Create a function that masks a password with asterisks
function maskPassword(length) {
  // Your code here
  return "*".repeat(length);
}

// Test cases
console.log(maskPassword(8)); // Should return: "********"
console.log(maskPassword(12)); // Should return: "************"
console.log(maskPassword(4)); // Should return: "****"

// Problem 2: Echo Formatter
// Create a function that echoes text multiple times with spaces
function echoText(text, times) {
  // Your code here
  return text.repeat(times);
}

// Test cases
console.log(echoText("hello ", 3)); // Should return: "hello hello hello"
console.log(echoText("yes ", 5)); // Should return: "yes yes yes yes yes"
console.log(echoText("boom ", 2)); // Should return: "boom boom"
