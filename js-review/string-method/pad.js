// Problem 1: Credit Card Formatter (padStart)

// Create a function that formats a credit card number
// by padding the beginning with asterisks to hide digits
// Total length should be 16 characters
function hideCreditCard(lastFourDigits) {
  // Your code here
  return lastFourDigits.padStart(12, "*");
}

// Test cases
console.log(hideCreditCard("1234"));
// Should return: "************1234"

console.log(hideCreditCard("5678"));
// Should return: "************5678"

console.log(hideCreditCard("9999"));
// Should return: "************9999"

// Problem 2: Receipt Item Aligner (padEnd)

// Create a function that formats a receipt item
// by padding the item name with dots to align the price
// Total length should be 30 characters
function formatReceiptItem(itemName, price) {
  // Your code here
  return itemName.padEnd(23, ".") + price;
}

// Test cases
console.log(formatReceiptItem("Coffee", "$3.50"));
// Should return: "Coffee.......................$3.50"

console.log(formatReceiptItem("Sandwich", "$7.99"));
// Should return: "Sandwich.....................$7.99"

console.log(formatReceiptItem("Water", "$1.50"));
// Should return: "Water........................$1.50"
