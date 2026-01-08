# Sets

Use new Set() when you need to store a collection of UNIQUE values where duplicates are automatically removed and you need fast checking if a value exists.

Use Cases - When to Reach for Set:

1. Remove Duplicates from Arrays
   javascript// Input: Array with duplicates
   const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// Use Set to remove duplicates
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Real example: Unique tags from blog posts
const allTags = ['javascript', 'react', 'javascript', 'nextjs', 'react'];
const uniqueTags = [...new Set(allTags)];
console.log(uniqueTags); // ['javascript', 'react', 'nextjs'] 2. Fast Membership Checking (O(1) lookup)
javascript// Check if value exists - SUPER FAST!
const allowedRoles = new Set(['admin', 'editor', 'viewer']);

// Fast check - O(1) constant time
if (allowedRoles.has('admin')) {
console.log('Access granted');
}

// Compare with Array - O(n) slow
const rolesArray = ['admin', 'editor', 'viewer'];
if (rolesArray.includes('admin')) { // Slower for large arrays
console.log('Access granted');
} 3. Track Unique Items (IDs, Users, Visitors)
javascript// Track unique website visitors
const uniqueVisitors = new Set();

function trackVisit(userId) {
uniqueVisitors.add(userId);
console.log(`Total unique visitors: ${uniqueVisitors.size}`);
}

trackVisit('user123'); // Total unique visitors: 1
trackVisit('user456'); // Total unique visitors: 2
trackVisit('user123'); // Total unique visitors: 2 (not added again!) 4. Prevent Duplicate Submissions
javascript// Prevent duplicate form submissions
const submittedEmails = new Set();

function submitNewsletter(email) {
if (submittedEmails.has(email)) {
return 'Email already subscribed!';
}

submittedEmails.add(email);
return 'Successfully subscribed!';
}

submitNewsletter('israel@gmail.com'); // Successfully subscribed!
submitNewsletter('israel@gmail.com'); // Email already subscribed! 5. Mathematical Set Operations
javascript// Union - Combine two sets
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Set {1, 2, 3, 4, 5}

// Intersection - Common elements
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set {3}

// Difference - Elements in A but not in B
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Set {1, 2} 6. Unique Categories/Tags System
javascript// E-commerce product categories
const productCategories = new Set();

productCategories.add('Electronics');
productCategories.add('Clothing');
productCategories.add('Electronics'); // Won't add duplicate
productCategories.add('Food');

console.log(productCategories.size); // 3
console.log([...productCategories]); // ['Electronics', 'Clothing', 'Food']

When NOT to Use Set:
❌ Don't use Set when:

You need to access items by index: array[0]
You need duplicates: [1, 1, 2, 2, 3]
You need key-value pairs: Use Map instead
You need to sort or filter frequently: Arrays are better
You need to store additional data with each item: Use Map or Array of objects

Key Characteristics:
✅ Automatically removes duplicates
✅ Fast lookup - .has() is O(1)
✅ Any data type - numbers, strings, objects, etc.
✅ Preserves insertion order
✅ Easy to get size - .size property
✅ Simple add/delete - .add(), .delete()
