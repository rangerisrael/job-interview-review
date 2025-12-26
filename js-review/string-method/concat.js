// Problem: Full Name Builder

// Create a function that combines first name, middle name, and last name
// into a full name with spaces between them
function buildFullName(firstName, middleName, lastName) {
  // Your code here
  return firstName.concat(" ").concat(middleName).concat(" ").concat(lastName);
}

// Test cases
console.log(buildFullName("John", "Michael", "Doe"));
// Should return: "John Michael Doe"

console.log(buildFullName("Maria", "Santos", "Cruz"));
// Should return: "Maria Santos Cruz"

console.log(buildFullName("Israel", "James", "Smith"));
// Should return: "Israel James Smith"

// Problem: File Path Builder

// Create a function that builds a complete file path
// by combining folder, subfolder, and filename
function buildFilePath(folder, subfolder, filename) {
  // Your code here
  return folder.concat("/").concat(subfolder).concat("/").concat(filename);
}

// Test cases
console.log(buildFilePath("documents", "projects", "report.pdf"));
// Should return: "documents/projects/report.pdf"

console.log(buildFilePath("images", "photos", "vacation.jpg"));
// Should return: "images/photos/vacation.jpg"

console.log(buildFilePath("code", "javascript", "app.js"));
// Should return: "code/javascript/app.js"
