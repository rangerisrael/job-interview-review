// console.log("hello world".slice(0, 5)); ///hello

// Challenge: Extract File Extension
// Problem:
// Write a function that extracts the file extension from a filename using slice().

function getFileExtension(filename) {
  // Your code here
  // Must use .slice() method
  let dotIndex = filename.indexOf(".");

  return dotIndex !== -1 ? filename.slice(dotIndex + 1) : "no extension";
}

// Test cases:
console.log(getFileExtension("document.pdf")); // "pdf"
console.log(getFileExtension("photo.jpg")); // "jpg"
console.log(getFileExtension("archive.tar.gz")); // "gz"
console.log(getFileExtension("script.min.js")); // "js"
console.log(getFileExtension("README")); // "" (no extension)

// Challenge: Extract Username from Email
// Problem:
// Write a function that extracts the username (everything before the @) from an email address using slice().

function extractUsername(email) {
  // Your code here
  // Must use .slice() method

  let atSymbolIndex = email.indexOf("@");

  return email.slice(0, atSymbolIndex);
}

// Test cases:
console.log(extractUsername("dave@gmail.com")); // "dave"
console.log(extractUsername("john.doe@company.co.uk")); // "john.doe"
console.log(extractUsername("admin@localhost")); // "admin"
console.log(extractUsername("user+tag@example.com")); // "user+tag"
console.log(extractUsername("test@")); // "test"
