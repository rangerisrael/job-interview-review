// Problem 1: Password Validator
// Write a function that checks if a password meets these criteria:
// Minimum 8 characters
// Maximum 20 characters
// Returns an object with isValid (boolean) and message (string)

function validatePassword(password = "") {
  // min 8

  if (password.length < 8) {
    return "Password minimum 8 character";
  }
  if (password.length > 20) {
    return "Password is maximum length to 20";
  }

  return "Password is valid";
}
console.log(validatePassword("ABC"));
console.log(
  validatePassword(
    "PASYEEJDDJKHDhsuwewqequweuqweuyqwueqwuyeuywqweuyquwyeuyyuuyuyutyeuywquyeuyquyeUYUIYYy23423423"
  )
);
console.log(validatePassword("Test@202323S"));

// Problem 2: String Truncator
// Create a function that truncates a string to a specific length and adds "..." if it was cut off.

function truncate(str, length) {
  let strValue = str.slice(0, 2);

  let getLength = length - 2;

  for (let i = 1; i <= getLength && str.length > 2; i++) {
    strValue += ".";
  }

  return strValue;
}

console.log(truncate("Hello World", 5)); // "He..."
console.log(truncate("Hi", 10)); // "Hi"

// Problem 3: Character Counter
// Build a function that counts how many times each character appears, but only process strings under 50 characters.

function countChars(str) {
  if (str.length > 50) {
    return null;
  }

  let countValue = {};

  for (const word of str) {
    countValue[word] = (countValue[word] ?? 0) + 1;
  }

  return countValue;
}

// Test case
console.log(countChars("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

// Problem 4: Middle Character(s)
// Write a function that returns the middle character(s) of a string:

// If odd length: return 1 character
// If even length: return 2 characters

function getMiddle(str) {
  const isEven = str.length % 2 == 0;
  const evenLength = str.length / 2;

  if (isEven) {
    return str.charAt(evenLength - 1) + str.charAt(evenLength);
  }

  return str.charAt(Math.round(evenLength - 1));
}

// Test cases
console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"

// Problem 5: Array Length Matcher
// Create a function that takes an array of strings and returns only those with a specific length.

function filterByLength(arr = [], targetLength) {
  // Your code here
  return arr.filter((value) => value.length == targetLength);
}

// Test case
console.log(filterByLength(["cat", "dog", "bird", "fish"], 4));
// ["bird", "fish"]

// Problem 6: Length-Based Encryption (Challenge)
// Create a simple "encryption" where each character is shifted by the string's length.
function encryptByLength(str) {
  // Shift each character by string length
  // Example: "abc" (length 3) -> "def"
  let getLength = str.length;

  let strWordLast = str.charCodeAt(str.length - 1);
  let getMagicWord = "";

  for (let ind = strWordLast + 1; ind <= strWordLast + getLength; ind++) {
    getMagicWord += String.fromCharCode(ind);
  }

  return getMagicWord;
}

console.log(encryptByLength("abc")); // "def"
