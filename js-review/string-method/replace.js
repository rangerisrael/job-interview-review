// Problem: Censor Bad Words

// Create a function that censors a specific bad word in a sentence
// Replace the bad word with asterisks of the same length
function censorWord(sentence, badWord) {
  // Your code here
  return sentence.replace(badWord, "****");
}

// Test cases
console.log(censorWord("This is a bad example", "bad"));
// Should return: "This is a *** example"

console.log(censorWord("I hate waiting in line", "hate"));
// Should return: "I **** waiting in line"

console.log(censorWord("That movie was terrible", "terrible"));
// Should return: "That movie was ********"

// Problem: URL Slug Maker

// Create a function that converts a blog title into a URL-friendly slug
// Replace all spaces with hyphens (-)
function makeSlug(title) {
  // Your code here
  return title.replaceAll(" ", "-");
}

// Test cases
console.log(makeSlug("My First Blog Post"));
// Should return: "My-First-Blog-Post"

console.log(makeSlug("Learning JavaScript Today"));
// Should return: "Learning-JavaScript-Today"

console.log(makeSlug("Top 10 Tips for Coding"));
// Should return: "Top-10-Tips-for-Coding"
