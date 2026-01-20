// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>

const upperCase: Readonly<Uppercase<string>> = "ASHSHSH";
const lowerCase: Readonly<Lowercase<string>> = "hello world";
const capitalizeCase: Readonly<Capitalize<string>> = "Hellow World";
const uncapitalizeCase: Readonly<Uncapitalize<string>> = "hello World";

console.log({
  upperCase,
  lowerCase,
  capitalizeCase,
  uncapitalizeCase,
});
