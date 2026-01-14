// string - array
const str = "Hello world";

console.log(str.split(""));

console.log(Array.from(str));

console.log([...str]);

console.log(Object.assign([], str));

let list = [];

for (const value of str) {
  list.push(value);
}
console.log(list, "last ");

// string - to object

console.log({ ...str });

console.log(Object.assign({}, str));

console.log(Object.fromEntries(Object.entries(str)));

console.log(Object.fromEntries(Array.from(str, (char, i) => [i, char])));

let obj = {};

for (let i = 0; i < str.length; i++) {
  obj[i] = str[i];
}

console.log(obj);

let obj2 = {};

for (const [key, val] of Object.entries(str)) {
  obj2[key] = val;
}

console.log(obj2);

// string - number

// char user charcode
if (isNaN(Number(str))) {
  const list = [];

  for (const [, val] of Object.entries(str)) {
    list.push(Number(val.charCodeAt()));
  }

  console.log(list.join(","));

  // 2. Using map (more concise)
  console.log(
    str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(",")
  );

  // 3. Using Array.from
  console.log(Array.from(str, (char) => char.charCodeAt(0)).join(","));

  // 4. Using spread operator
  console.log([...str].map((char) => char.charCodeAt(0)).join(","));
} else {
  // Convert numeric string to number
  console.log(Number(numStr)); // 123.45
  console.log(parseInt(numStr)); // 123 (integer only)
  console.log(parseFloat(numStr)); // 123.45
  console.log(+numStr); // 123.45 (unary plus operator)
  console.log(numStr * 1); // 123.45 (coercion)
  console.log(~~numStr); // 123 (double NOT - converts to int)
}
