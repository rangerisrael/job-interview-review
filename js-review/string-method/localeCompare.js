const a = "réservé"; // With accents, lowercase with some different font text
const b = "RESERVE"; // No accents, uppercase
const c = "Reserve"; // No accents, titlecase
const d = "reserve"; // No accents, lowercase

// console.log(a.localeCompare(b));
// // Expected output: 1
// console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// // Expected output: 0
// console.log(a.localeCompare(b));
// console.log(b.localeCompare(c));
// console.log(a.localeCompare(c));
// console.log(c.localeCompare(d));

// Create a function that compares two names alphabetically
// Return a message saying which name comes first, or if they're equal
function compareNames(name1, name2) {
  // Your code here
  // Hint: localeCompare returns -1, 0, or 1
  const checkName = name1.localeCompare(name2, "en", { sensitivity: "base" });

  if (checkName == -1 || checkName == 1) {
    return name1 + " comes before " + name2;
  } else {
    return "Names are equal";
  }
}

// Test cases
console.log(compareNames("Alice", "Bob"));
// Should return: "Alice comes before Bob"

console.log(compareNames("Zara", "Adam"));
// Should return: "Adam comes before Zara"

console.log(compareNames("John", "John"));
// Should return: "Names are equal"

console.log(compareNames("maria", "Maria"));
// Should return: "Names are equal" (case-insensitive comparison)

// Create a function that takes an array of product names
// and returns them sorted alphabetically
function sortProducts(products) {
  // Your code here

  return products.sort((a, b) => a.localeCompare(b));
}

// Test cases
console.log(sortProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]));
// Should return: ["Keyboard", "Laptop", "Monitor", "Mouse"]

console.log(sortProducts(["Banana", "Apple", "Cherry", "Date"]));
// Should return: ["Apple", "Banana", "Cherry", "Date"]

console.log(sortProducts(["Zebra", "Ant", "Bear", "Cat"]));
// Should return: ["Ant", "Bear", "Cat", "Zebra"]
