console.log("Hello world".substring(1, 5)); // ello
console.log("Javascript".substring(2, 5)); // vas
console.log("Programming".substring(4, 8)); // ramm
console.log("Language".substring(3, 5)); // gu
console.log("Tiktok".substring(2, 4)); // kt
console.log("Developer".substring(4, -1)); // Deve
console.log("Job Interview".substring(3, 0)); // Job
console.log("Job Interview".substring(3)); // Job Interview

// Challenge: Mask Credit Card Number
// Problem:
// Write a function that masks a credit card number, showing only the last 4 digits. Use substring() method.

function maskCreditCard(cardNumber) {
  // Your code here
  // Must use .substring() method
  let pos = cardNumber.length - 4;
  let result = "";

  for (let index = 0; index < pos; index++) {
    result += "*";
  }

  return result + cardNumber.substring(pos);
}

function maskCreditCardV2(cardNumber) {
  // Your code here
  // Must use .substring() method
  let pos = cardNumber.length - 4;
  return "*".repeat(pos) + cardNumber.substring(pos);
}

// Test cases:
console.log(maskCreditCardV2("1234567812345678")); // "************5678"
console.log(maskCreditCardV2("4532123456789012")); // "************9012"
console.log(maskCreditCardV2("6011111111111117")); // "************1117"
console.log(maskCreditCardV2("378282246310005")); // "***********0005" (15 digits - Amex)

// Challenge: Swap First and Last Word
// Problem:
// Write a function that swaps the first and last word in a sentence using substring().

function swapWords(sentence) {
  // Your code here
  // Must use .substring() method
  let first = sentence.indexOf(" "); //get first space
  let last = sentence.lastIndexOf(" "); // get last space

  const firstWord = sentence.substring(0, first);
  const lastWord = sentence.substring(last + 1);
  const middle = sentence.substring(first, last + 1);

  return lastWord + middle + firstWord;
}
// Test cases:
console.log(swapWords("Hello World")); // "World Hello"
console.log(swapWords("JavaScript is awesome")); // "awesome is JavaScript"
console.log(swapWords("I love coding in TypeScript")); // "TypeScript love coding in I"
console.log(swapWords("React")); // "React" (single word)
console.log(swapWords("The quick brown fox")); // "fox quick brown The"
