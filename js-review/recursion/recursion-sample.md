// The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.
// A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

// Program to countdown till 1

// recursive function
function counter(count) {
// display count
// console.log(count);

// condition for stopping
if (count > 1) {
// decrease count
count = count - 1;

    // call counter with new value of count
    counter(count);

} else {
// terminate execution
return;
}
}

// access function
counter(5);

// Problem 1: Sum of Array Elements
// Scenario: Calculate the total sum of all numbers in an array using recursion.
// Example:
// javascript

console.log(sumArray([1, 2, 3, 4, 5])); // Should return 15
console.log(sumArray([10, 20, 30])); // Should return 60
console.log(sumArray([5])); // Should return 5
console.log(sumArray([])); // Should return 0

function sumArray(arr) {
// Base case: if array is empty, return \_\_\_
// Recursive case:
// sum = first element + sum of remaining elements
// sum = arr[0] + sumArray(rest of array)

if (arr.length <= 0) {
return 0;
}

return arr[0] + sumArray(arr.slice(1));
}

// Problem 2: Power Function (Exponentiation)
// Scenario: Calculate base raised to the power of exponent (base^exponent) using recursion.
power(2, 3); // Should return 8 (2 × 2 × 2)
power(5, 2); // Should return 25 (5 × 5)
power(3, 4); // Should return 81 (3 × 3 × 3 × 3)
power(2, 0); // Should return 1 (anything^0 = 1)

function power(base, exponent) {
// Base case: any number to the power of 0 is \_\_\_
// Recursive case:
// base^exponent = base × base^(exponent-1)
// Example: 2^3 = 2 × 2^2 = 2 × 2 × 2^1 = 2 × 2 × 2 × 2^0

// Base case: any number to the power of 0 is 1
if (exponent === 0) {
return 1;
}

// Recursive case: base^exponent = base × base^(exponent-1)
return base \* power(base, exponent - 1)
}

function incremental(count, max) {
if (count > max) {
return; // Stop when we exceed max
}

console.log(count); // Print current number
incremental(count + 1, max); // Increment and recurse
}

// incremental(1, 100); // Start at 1, stop at 100

function countdown(value) {
console.log(value, "count");

if (value > 0 && value <= 100) {
countdown(value + 1);
}
}
countdown(1);
