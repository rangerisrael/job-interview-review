console.log("hello world".toUpperCase());
console.log("world".toUpperCase());
console.log("programmer".toUpperCase());

function capitalize(word) {
  // get index space position
  return word.replace(/\b\w/g, (word) => word.toUpperCase());
}

function capitalize2(word) {
  // get index space position
  return word
    .split(" ")
    .map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
    .join(" ");
}

console.log(capitalize2("Hello world"));
console.log(capitalize2("GOOD bye STRANGER"));
