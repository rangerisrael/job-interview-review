// The isFinite() function determines whether a value is finite, first converting the value to a number if necessary.
//  A finite number is one that's not NaN or ±Infinity. Because coercion inside the isFinite()
//  function can be surprising, you may prefer to use Number.isFinite().

function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!""

console.log(div(1));
// Expected output: "Number is NOT Infinity."
