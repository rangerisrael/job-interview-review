// Create a Price object with a custom valueOf() method
// When used in math operations, it should return the numeric price
function Price(amount) {
  this.amount = amount;
  this.currency = "PHP";

  // Add valueOf() method here
  this.valueOf = function () {
    return this.amount;
  };
}

// Test cases
let price1 = new Price(100);
let price2 = new Price(50);

console.log(price1 + price2);
// Should return: 150

console.log(price1 * 2);
// Should return: 200

console.log(price2 - 10);
// Should return: 40

// Create a Temperature object that stores Celsius
// valueOf() should return the value in Fahrenheit
function Temperature(celsius) {
  this.celsius = celsius;

  // Add valueOf() method here
  // Formula: (celsius * 9/5) + 32
  this.valueOf = function () {
    return (this.celsius * 9) / 5 + 32;
  };
}

// Test cases
let temp1 = new Temperature(0);
let temp2 = new Temperature(100);
let temp3 = new Temperature(25);

console.log(+temp1);
// Should return: 32 (0°C = 32°F)

console.log(+temp2);
// Should return: 212 (100°C = 212°F)

console.log(temp3 > 70);
// Should return: true (25°C = 77°F, which is > 70)
