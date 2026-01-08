// The isNaN() function determines whether a value is NaN, first converting the value to a number if necessary.
//  Because coercion inside the isNaN() function can be surprising, you may prefer to use Number.isNaN().

function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140
