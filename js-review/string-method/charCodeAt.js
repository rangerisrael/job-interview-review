// ///////////////////////////////////////////////////
// charCodeAt
// ///////////////////////////////////////

/**
 * Write a function that takes a string and returns the sum of all character codes
 * Example: sumCharCodes("ABC") should return 198 (65 + 66 + 67)
 */
function sumCharCodes(str) {
  return Array.from(str)
    .map((value) => value.charCodeAt())
    .reduce((acc, c) => acc + c, 0);
}

// Test cases for Problem 1
console.log("=== PROBLEM 1: Sum of Character Codes ===");
console.log(sumCharCodes("ABC")); // Expected: 198
console.log(sumCharCodes("Hello")); // Expected: 500
console.log(sumCharCodes("123")); // Expected: 150
console.log("\n");

// ============================================
// PROBLEM 4: MEDIUM - Shift Character by 1
// ============================================
/**
 * Take a single character and return the next character
 * Example: 'A' becomes 'B', 'b' becomes 'c'
 * Hint: Get the code, add 1, use String.fromCharCode()
 */
function nextChar(char) {
  // Your code here
  let strValue = char.charCodeAt() + 1;
  //    letter = ascii or number 65 + 1

  return String.fromCharCode(strValue);
  //   number to letter
}

// Test cases
console.log("=== PROBLEM 4: Next Character ===");
console.log(nextChar("A")); // Expected: "B"
console.log(nextChar("b")); // Expected: "c"
console.log(nextChar("5")); // Expected: "6"
console.log("\n");
