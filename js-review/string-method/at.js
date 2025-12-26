// console.log("hello world".at(-1)); ///d
/**
 * Create a function that safely gets a character at any position
 * - Use .at() to handle both positive and negative indices
 * - Return the character or "Index out of range" if invalid
 */

function getCharAt(str = "", index) {
  // Your code here
  return str.at(index) ?? "Index out of range";
}

function getCharAtV2(str = undefined, i) {
  const char = str.at(i);
  return char !== undefined ? str.at(i) : "Index out of range";
}

function getCharAtV3(str = undefined, i) {
  const char = str.at(i);

  switch (typeof char) {
    case "string":
      return char;
    default:
      return "Index out of range";
  }
}

// Test cases:
console.log(getCharAt("JavaScript", 0)); // "J"
console.log(getCharAt("JavaScript", -1)); // "t"
console.log(getCharAt("JavaScript", -4)); // "r"
console.log(getCharAt("JavaScript", 15)); // "Index out of range"
console.log(getCharAt("JavaScript", -15)); // "Index out of range"

console.log(getCharAtV2("JavaScript", 0)); // "J"
console.log(getCharAtV2("JavaScript", -1)); // "t"
console.log(getCharAtV2("JavaScript", -4)); // "r"
console.log(getCharAtV2("JavaScript", 15)); // "Index out of range"
console.log(getCharAtV2("JavaScript", -15)); // "Index out of range"

console.log(getCharAtV3("JavaScript", 0)); // "J"
console.log(getCharAtV3("JavaScript", -1)); // "t"
console.log(getCharAtV3("JavaScript", -4)); // "r"
console.log(getCharAtV3("JavaScript", 15)); // "Index out of range"
console.log(getCharAtV3("JavaScript", -15)); // "Index out of range"
