//The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7

// Problem 1: Ride-Sharing Car Calculator 🚗
// You're building a booking system for a company outing. You need to calculate how many cars are needed to transport all employees.

function calculateCarsNeeded(totalPeople, seatsPerCar) {
  // Handle edge case: no people
  if (totalPeople === 0) return 0;

  // Divide people by seats per car
  const carsNeeded = totalPeople / seatsPerCar;

  // Round UP to ensure everyone has a seat
  return Math.ceil(carsNeeded);
}

console.log("uploading progress");

// Test cases with explanations
console.log(calculateCarsNeeded(25, 4));
// 25 ÷ 4 = 6.25 → 7 cars ✅
// Car 1-6: 4 people each (24 people)
// Car 7: 1 person

console.log(calculateCarsNeeded(20, 4));
// 20 ÷ 4 = 5 → 5 cars ✅
// Exactly 5 full cars

console.log(calculateCarsNeeded(17, 5));
// 17 ÷ 5 = 3.4 → 4 cars ✅
// Car 1-3: 5 people each (15 people)
// Car 4: 2 people

console.log(calculateCarsNeeded(100, 7));
// 100 ÷ 7 = 14.285... → 15 cars ✅
// 14 cars × 7 = 98 people
// Car 15: 2 people

console.log(calculateCarsNeeded(3, 10));
// 3 ÷ 10 = 0.3 → 1 car ✅
// Only 3 people, still need 1 car

function calculateUploadProgress(uploadedBytes, totalBytes) {
  // Handle edge case: no total bytes
  if (totalBytes === 0) return 0;

  // Calculate percentage
  const percentage = (uploadedBytes / totalBytes) * 100;

  // Round UP to show optimistic progress
  return Math.ceil(percentage);
}
// You're building a file upload feature that shows progress in percentage. The progress bar only displays **whole percentages** (no decimals like 45.7%).

// ### Problem:
// Write a function `calculateUploadProgress` that:
// - Takes two parameters: `uploadedBytes` (number) and `totalBytes` (number)
// - Returns the upload progress as a **whole percentage** (0-100)
// - Always round UP to show optimistic progress to users
// - Use `Math.ceil()` to round up the percentage

// Test cases with explanations
console.log(calculateUploadProgress(450, 1000));
// 450/1000 * 100 = 45% → 45% ✅
// Already whole number

console.log(calculateUploadProgress(1, 1000));
// 1/1000 * 100 = 0.1% → 1% ✅
// Shows user that upload started!

console.log(calculateUploadProgress(999, 1000));
// 999/1000 * 100 = 99.9% → 100% ✅
// Shows "almost done!" optimistically

console.log(calculateUploadProgress(5000, 10000));
// 5000/10000 * 100 = 50% → 50% ✅
// Already whole number

console.log(calculateUploadProgress(7531, 10000));
// 7531/10000 * 100 = 75.31% → 76% ✅
// Shows 76% instead of 75%
