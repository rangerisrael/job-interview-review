Problem 1: Password Validator
Write a function that checks if a password meets these criteria:

Minimum 8 characters
Maximum 20 characters
Returns an object with isValid (boolean) and message (string)

javascriptfunction validatePassword(password) {
// Your code here
}

// Test cases
console.log(validatePassword("abc")); // { isValid: false, message: "Too short" }
console.log(validatePassword("validpass123")); // { isValid: true, message: "Valid" }
Problem 2: String Truncator
Create a function that truncates a string to a specific length and adds "..." if it was cut off.
javascriptfunction truncate(str, maxLength) {
// Your code here
}

// Test cases
console.log(truncate("Hello World", 5)); // "He..."
console.log(truncate("Hi", 10)); // "Hi"
Problem 3: Character Counter
Build a function that counts how many times each character appears, but only process strings under 50 characters.
javascriptfunction countChars(str) {
// Return null if string too long
// Otherwise return object with character counts
}

// Test case
console.log(countChars("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
Problem 4: Middle Character(s)
Write a function that returns the middle character(s) of a string:

If odd length: return 1 character
If even length: return 2 characters

javascriptfunction getMiddle(str) {
// Your code here
}

// Test cases
console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
Problem 5: Array Length Matcher
Create a function that takes an array of strings and returns only those with a specific length.
javascriptfunction filterByLength(arr, targetLength) {
// Your code here
}

// Test case
console.log(filterByLength(["cat", "dog", "bird", "fish"], 4));
// ["bird", "fish"]
Problem 6: Length-Based Encryption (Challenge)
Create a simple "encryption" where each character is shifted by the string's length.
javascriptfunction encryptByLength(str) {
// Shift each character by string length
// Example: "abc" (length 3) -> "def"
}

console.log(encryptByLength("abc")); // "def"
