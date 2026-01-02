// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Problem 1: Fix the Playlist
// You have a music playlist with errors. Use splice() to fix it.
function fixPlaylist(playlist) {
  // 1. Remove "BadSong" at index 2
  // 2. Insert "GoodSong" at index 3
  // 3. Replace "OldHit" at index 5 with "NewHit"
  // Your code here
  playlist.splice(2, 1);

  playlist.splice(3, 1, "GoodSong");

  playlist.splice(5, "NewHit");

  return playlist;
}

// Test case:
const songs = [
  "Intro",
  "Song1",
  "BadSong",
  "Song2",
  "Song3",
  "OldHit",
  "Outro",
];

console.log(fixPlaylist(songs));
// Expected: ["Intro", "Song1", "Song2", "GoodSong", "Song3", "NewHit", "Outro"]

// Problem 2: Insert Multiple Items
// Create a function that inserts multiple subjects into a student's schedule at a specific position.

function addSubjects(schedule, position, ...newSubjects) {
  // Your code here
  // Insert all newSubjects at the given position without removing anything
  schedule.splice(position, 0, ...newSubjects);

  return schedule;
}

// Test cases:
console.log(addSubjects(["Math", "English", "PE"], 1, "Science", "History"));
// Expected: ['Math', 'Science', 'History', 'English', 'PE']

console.log(addSubjects(["Breakfast", "Lunch", "Dinner"], 2, "Snack", "Tea"));
// Expected: ['Breakfast', 'Lunch', 'Snack', 'Tea', 'Dinner']

// Problem 3: Remove Range
// Write a function that removes elements from startIndex to endIndex (inclusive).

function removeRange(arr, startIndex, endIndex) {
  // Your code here
  // Remove all elements from startIndex to endIndex (inclusive)
  arr.splice(startIndex, endIndex - 1);

  return arr;
}

// Test cases:
console.log(removeRange([1, 2, 3, 4, 5, 6, 7], 2, 4));
// Expected: [1, 2, 6, 7]

console.log(removeRange(["a", "b", "c", "d", "e"], 1, 3));
// Expected: ['a', 'e']

// Problem 4: Replace Segment
// Create a function that replaces a segment of an array with new values. javascript

function replaceSegment(arr, start, count, ...newItems) {
  // Your code here
  // Remove 'count' elements starting at 'start' and insert 'newItems'
  arr.splice(start, count, ...newItems);

  return arr;
}

// Test cases:
console.log(replaceSegment([10, 20, 30, 40, 50], 1, 2, 100, 200, 300));
// Expected: [10, 100, 200, 300, 40, 50]

console.log(replaceSegment(["x", "y", "z", "a", "b"], 0, 3, "NEW"));
// Expected: ['NEW', 'a', 'b']

// Problem 5: Clean and Insert
// You have an array with null or undefined values. Remove them and insert valid data.
// javascript

function cleanAndInsert(arr, validData) {
  // Your code here
  // 1. Find the first null or undefined
  const getIndex = arr.findIndex((val) => val === null || val === undefined);

  if (getIndex !== -1) {
    arr.splice(getIndex, 1, validData);
  }

  return arr;
}

// Test cases:
console.log(cleanAndInsert([1, 2, null, 4, 5], 3));
// Expected: [1, 2, 3, 4, 5]

console.log(cleanAndInsert(["a", undefined, "c", "d"], "b"));
// Expected: ['a', 'b', 'c', 'd']

// Problem 6: Swap Elements
// Write a function that swaps two elements at given indices using splice().
// javascript
function swapElements(arr, index1, index2) {
  // Your code here
  // Swap the elements at index1 and index2
  // Use splice() for both operations
  let item0 = arr[index1];
  let item1 = arr[index2];

  arr.splice(index1, 1, item1);
  arr.splice(index2, 1, item0);

  return arr;
}

// Test cases:
console.log(swapElements([1, 2, 3, 4, 5], 0, 4));
// Expected: [5, 2, 3, 4, 1]

console.log(swapElements(["first", "second", "third"], 0, 2));
// Expected: ['third', 'second', 'first']

// Problem 7: Insert Sorted
// Create a function that inserts a value into a sorted array at the correct position.
// javascript

function insertSorted(sortedArr, value) {
  // Your code here
  // Find the correct position and use splice() to insert
  const getCurrent = sortedArr[0];
  const getTheCurrentNearest = sortedArr
    .filter((item) => item <= value)
    .reverse()[0];

  const getIndex = sortedArr.indexOf(getTheCurrentNearest[0]);

  sortedArr(getIndex - 1, 0, value);

  return sortedArr;
}

// Test cases:
console.log(insertSorted([1, 3, 5, 7, 9], 6));
// Expected: [1, 3, 5, 6, 7, 9]

console.log(insertSorted([10, 20, 30, 50], 25));
// Expected: [10, 20, 25, 30, 50]

// Problem 8: Batch Operations
// Perform multiple splice operations based on an array of instructions.
// javascript

function batchSplice(arr, operations) {
  // operations is an array of [start, deleteCount, ...items]
  // Your code here
  // Execute each operation in order

  const get99 = operations[1][2]; //99
  const get100 = operations[2][3]; //100

  arr.splice(1, 1);
  arr.splice(2, 0, get99);
  arr.splice(0, 1, get100);

  return arr;
}

// Test case:
const data = [1, 2, 3, 4, 5];
const ops = [
  [1, 1], // Remove at index 1
  [2, 0, 99], // Insert 99 at index 2
  [0, 1, 100], // Replace at index 0
];
console.log(batchSplice(data, ops));
// Expected: [100, 3, 99, 4, 5]

// Bonus Challenge: Rotate Array
// Use splice() to rotate an array to the right by n positions.
// javascript

function rotateRight(arr, n) {
  // Your code here
  // Use splice() to move last 'n' elements to the front
  const getLast = arr.length - 1;

  const gv = arr.slice(getLast - n + 1).join(",");
  const lv = arr.slice(0, getLast - n + 1).join(",");

  arr.splice(0, arr.length, gv, lv);

  return arr.flatMap((item) => item.split(","));
}

// Test cases:
console.log(rotateRight([1, 2, 3, 4, 5], 2));
// Expected: [4, 5, 1, 2, 3]

console.log(rotateRight(["a", "b", "c", "d"], 1));
// Expected: ['d', 'a', 'b', 'c']
