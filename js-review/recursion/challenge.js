// The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.
//  A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

// Program to countdown till 1

// Problem 1: Sum of Array Elements
// Scenario: Calculate the total sum of all numbers in an array using recursion.
// Example:
// javascript
console.log("Coun list of array");

console.log(sumArray([1, 2, 3, 4, 5])); // Should return 15
console.log(sumArray([10, 20, 30])); // Should return 60
console.log(sumArray([5])); // Should return 5
console.log(sumArray([])); // Should return 0

function sumArray(arr) {
  // Base case: if array is empty, return ___

  // Recursive case:
  // sum = first element + sum of remaining elements
  // sum = arr[0] + sumArray(rest of array)
  if (arr.length <= 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}
// 1 + sumArray(2, 3, 4, 5);
// 2 + sumArray(3, 4, 5);
// 3 + sumArray(4, 5);
// 4 + sumArray(5);
// 5 + sumArray([]);
// = 15

// 10 + sumArray(20,30)
// 20 + sumArray(30)
// 30 + sumArray([])
// = 60

// 5 + sumArray([])
// sumArray([])
// 0;

console.log("Power");

// Problem 2: Power Function (Exponentiation)
// Scenario: Calculate base raised to the power of exponent (base^exponent) using recursion.
console.log(powerExponent(2, 3));
console.log(powerExponent(5, 2));
console.log(powerExponent(3, 4));
console.log(powerExponent(2, 0));

// Should return 8 (2 × 2 × 2)
// Should return 25 (5 × 5)
// Should return 81 (3 × 3 × 3 × 3)
// Should return 1 (anything^0 = 1)

function power(base, exponent) {
  // Base case: any number to the power of 0 is ___
  // Recursive case:
  // base^exponent = base × base^(exponent-1)
  // Example: 2^3 = 2 × 2^2 = 2 × 2 × 2^1 = 2 × 2 × 2 × 2^0

  // if exponent is equal to 0
  if (exponent == 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

function powerExponent(base, exponent) {
  if (exponent == 0) {
    return 1;
  }

  return Math.pow(base, exponent);
}
// 2 * power(2, 3-1);
// 2 * power(2, 2-1);
// 2 * power(2, 1-1);
// 2 * power(2, 1-1);

// 2 * power(2,2) // 4
// 2 * power(2,1) // 2
// 2 * power(2, 0); //1
// 2 * 1

//  2 * (2 * (2 * 1))
//  2 * (2 * 2)
// 8

// 5 * power(5,1)
// 5 * power(5, 0)
// 5 * 1

// 5 * (5 * 1)
// 5 * 5
// 25

// 3 * power(3,3)
// 3 * power(3, 2)
// 3 * power(3, 1)
// 3 * power(3, 0)
// 3 * 1

// 3 * (3 * (3 * 3))
//  3 * (3 * 9)
//  3 * 27
//  81

console.log("counter");

function incremental(count, max) {
  let counter = count + 1;
  // Stop when we exceed max
  if (count >= max) {
    return;
  }
  // Print current number
  console.log(count);

  // Increment and recurse
  incremental(counter + 1, max);
}

incremental(1, 100); // Start at 1, stop at 100

console.log("Increment");
function countdown(value) {
  console.log(value);

  let inc = value + 1;

  if (inc <= 0) {
    return;
  }

  if (inc <= 500) {
    countdown(inc);
  }
}
countdown(1);

console.log("Decrement");

// recursive function
function decrement(count) {
  console.log(count);

  let dec = count - 1;

  if (dec <= 0) {
    return;
  }

  if (dec > 0 && dec <= 100) {
    decrement(dec);
  }
}

// access function
decrement(50);
