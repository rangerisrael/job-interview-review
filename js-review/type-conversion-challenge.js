// Exercise 2: Type conversion challenge
// Predict the output without running
// Challenge Set 1: Basic Operations
console.log(1 + "2");
console.log("2" - 1);
console.log(true + true);
console.log([] == false);
console.log({} == false);
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log("10" / "2");
console.log("abc" - 1);
console.log(null + 5);
console.log(undefined + 5);

//Challenge Set 2: Boolean Madness

console.log(false + false);
console.log(false + true);
console.log(true * 3);
console.log(false == 0);
console.log(true == 1);
console.log(true == 2);
console.log(false === 0);

//Challenge Set 3: Arrays & Objects
console.log([1] + [2]);
console.log([1, 2] + [3, 4]);
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log([1] == 1);
console.log([1, 2] == "1,2");\

// Challenge Set 4: Tricky Nullish Values
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(undefined == 0);
console.log(NaN == NaN);
console.log(typeof NaN);

// Challenge Set 5: String Coercion
console.log("" + 0);
console.log("" - 0);
console.log("3" + 4 + 5);
console.log(3 + 4 + "5");
console.log("5" - "2" + 3);
console.log("5" + "2" - 3);


//Challenge Set 6: Mixed Operations

console.log(!!"");
console.log(!!"0");
console.log(!!null);
console.log(+true);
console.log(+false);
console.log(+"123");
console.log(+"abc");

//Challenge Set 7: Comparison Chaos
console.log("10" > 9);
console.log("10" > "9");
console.log("a" > "b");
console.log("abc" > "b");
console.log([10] > 9);
console.log([] < 1);


//Challenge Set 8: Advanced Weirdness

console.log([] == ![]);
console.log([] == []);
console.log({} == {});
console.log("" == 0);
console.log(" " == 0);
console.log("0" == false);
console.log(1 + 2 + "3" + 4 + 5);


// Hint for solving:

// Check if there's a string → use concatenation for +
// For -, *, / → always convert to numbers
// For == → converts to same type (usually numbers)
// Remember: null, undefined, "", 0, false, NaN have special conversion rules