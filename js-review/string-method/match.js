const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const term = "brown";
const found = paragraph.match(term);

console.log(found);
// Expected output: Array ["T", "I"]

// Problem: Email Validator

// Create a function that checks if a string contains a valid email pattern
// Return the email if found, or null if not found
function findEmail(text) {
  // Your code here
  const findMatchEmail = text.match(/\w+@\w+\.\w+/);
  return findMatchEmail?.[0] ?? null;
}

// Test cases
console.log(findEmail("Contact me at israel@example.com for details"));
// Should return: ["israel@example.com"]

console.log(findEmail("My email is john.doe@gmail.com"));
// Should return: ["john.doe@gmail.com"]

console.log(findEmail("No email here!"));
// Should return: null

console.log(
  findEmail("Reach out to admin@company.co.uk or support@company.co.uk")
);
// Should return: ["admin@company.co.uk", "support@company.co.uk"] (if using global flag)

// Problem: Hashtag Extractor

// Create a function that extracts all hashtags from a social media post
// Hashtags start with # and contain letters/numbers
function extractHashtags(post) {
  // Your code here
  const findMatchHash = post.match(/#\w+/g);

  return findMatchHash;
}

// Test cases
console.log(extractHashtags("Love coding! #JavaScript #WebDev #Programming"));
// Should return: ["#JavaScript", "#WebDev", "#Programming"]

console.log(
  extractHashtags("Check out my new project #NextJS #React #TypeScript")
);
// Should return: ["#NextJS", "#React", "#TypeScript"]

console.log(extractHashtags("No hashtags in this post"));
// Should return: null

console.log(extractHashtags("Single tag #coding is fun"));
// Should return: ["#coding"]

// Problem: Word Position Finder

// Create a function that finds all occurrences of a word in a sentence
// and returns an array of objects with the word and its position (index)
function findWordPositions(sentence, word) {
  // Your code here
  let regex = new RegExp(word, "gi");
  let findMatches = Array.from(sentence.matchAll(regex));

  return findMatches.map((match) => ({
    word: match[0],
    index: match.index,
  }));
}

// Test cases
console.log(
  findWordPositions("I love JavaScript and JavaScript is awesome", "JavaScript")
);
// Should return: [
//   { word: "JavaScript", index: 7 },
//   { word: "JavaScript", index: 25 }
// ]

console.log(findWordPositions("The cat and the dog and the bird", "the"));
// Should return: [
//   { word: "the", index: 12 },
//   { word: "the", index: 24 }
// ]

console.log(findWordPositions("Hello world", "code"));
// Should return: [] (empty array, word not found)
