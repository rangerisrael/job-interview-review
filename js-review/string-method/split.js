// Problem 1: Word Counter

// Create a function that counts how many words are in a sentence
function countWords(sentence) {
  // Your code here
  const arr = sentence.split(" ").length;
  return arr;
}

// Test cases
console.log(countWords("Hello world"));
// Should return: 2

console.log(countWords("I love coding in JavaScript"));
// Should return: 5

console.log(countWords("This is a test"));
// Should return: 4

// Problem 2: Email Username Extractor

// Create a function that extracts the username from an email address
// (everything before the @ symbol)
function getUsername(email) {
  // Your code here
  return email.split("@")[0];
}

// Test cases
console.log(getUsername("israel@example.com"));
// Should return: "rafael"

console.log(getUsername("john.doe@gmail.com"));
// Should return: "john.doe"

console.log(getUsername("admin@company.co.uk"));
// Should return: "admin"
