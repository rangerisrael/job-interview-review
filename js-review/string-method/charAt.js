// Problem 1: First and Last
// Write a function that returns the first and last character of a string concatenated together.
// javascript

function firstAndLast(str) {
  // Your code here
  let first = str.charAt(0);
  let last = str.charAt(str.length - 1);

  return first + last;
}

// Test cases
console.log(firstAndLast("hello")); // "ho"
console.log(firstAndLast("a")); // "aa"
console.log(firstAndLast("JavaScript")); // "Jt"

// Problem 2: Vowel Position Finder
// Create a function that returns all positions (indices) where vowels appear in a string.
// javascript

function findVowelPositions(str) {
  // Return array of indices where vowels are found
  const vowels = ["a", "e", "i", "o", "u"];

  return Array.from(str)
    .filter((value) => vowels.includes(value))
    .map((val) => str.indexOf(val));
}

// Test cases
console.log(findVowelPositions("hello")); // [1, 4]
console.log(findVowelPositions("aeiou")); // [0, 1, 2, 3, 4]
console.log(findVowelPositions("sky")); // []

// Problem 3: Alternate Character Extractor
// Write a function that extracts every other character starting from a given position.
// javascript
function extractAlternate(str, startPos) {
  // Extract characters at startPos, startPos+2, startPos+4, etc.
  let getLength = str.length;
  let strValue = "";

  for (let index = startPos; index < getLength; index += 2) {
    strValue += str.charAt(index);
  }

  return strValue;
}

// Test cases
console.log(extractAlternate("abcdefgh", 0)); // "aceg"
console.log(extractAlternate("abcdefgh", 1)); // "bdfh"
console.log(extractAlternate("hello world", 0)); // "hlowrd"

// Problem 4: Character Frequency at Position
// Create a function that checks if a specific character appears at multiple positions in a string.
// javascript

function findCharPositions(str, char) {
  // Return array of all positions where char appears

  return Array.from(str)
    .map((value, index) => (value === char ? index : -1))
    .filter((index) => index !== -1);
}

// Test cases
console.log(findCharPositions("hello", "l")); // [2, 3]
console.log(findCharPositions("mississippi", "i")); // [1, 4, 7, 10]
console.log(findCharPositions("abc", "z")); // []

// Problem 5: Palindrome Checker using charAt
// Write a function that checks if a string is a palindrome by comparing characters from both ends using charAt().
// javascript

function isPalindrome(str) {
  // Use charAt to compare characters from start and end
  let reversed = "";

  // Start from END and go backwards to beginning
  for (let idx = str.length - 1; idx >= 0; idx--) {
    reversed += str.charAt(idx);
  }

  return str === reversed;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("@#!!!racecar&^")); // true

// Problem 6: Character Replacer at Specific Positions
// Create a function that replaces characters at even positions with a given character.
// javascript

function replaceAtEvenPositions(str, replacement) {
  // Replace characters at positions 0, 2, 4, 6, etc.
  let strValue = "";

  for (let iteration = 0; iteration < str.length; iteration++) {
    // even use module
    if (iteration % 2 === 0) {
      strValue += replacement;
    } else {
      strValue += str.charAt(iteration);
    }
  }

  return strValue;
}

// Test cases
console.log(replaceAtEvenPositions("hello", "*")); // "*e*l*"
console.log(replaceAtEvenPositions("abcdef", "X")); // "XbXdXf"

// Problem 7: Reverse String using charAt (Challenge)
// Build a function that reverses a string using only charAt() and a loop (no built-in reverse methods).
// javascript

function reverseWithCharAt(str) {
  // Your code here
  let strValue = "";

  for (let charIndex = str.length - 1; charIndex >= 0; charIndex--) {
    strValue += str.charAt(charIndex);
  }

  return strValue;
}

// Test cases
console.log(reverseWithCharAt("hello")); // "olleh"
console.log(reverseWithCharAt("JavaScript")); // "tpircSavaJ"

// Problem 8: Character Pattern Matcher
// Write a function that checks if characters at specific positions follow a pattern.
// javascript

function matchPattern(str, positions, expectedChar) {
  // Check if charAt(positions[i]) === expectedChar for all positions
}

// Test cases
console.log(matchPattern("hello", [1, 4], "o")); // false (position 1 is 'e')
console.log(matchPattern("banana", [1, 3, 5], "a")); // true

// Bonus Challenge: Caesar Cipher
// Implement a Caesar cipher using charAt() to shift each letter by a given number.
// javascript

function caesarCipher(str, shift) {
  // Shift each letter by 'shift' positions
  // Keep non-letters unchanged
}

// Test cases
console.log(caesarCipher("abc", 1)); // "bcd"
console.log(caesarCipher("xyz", 3)); // "abc"
