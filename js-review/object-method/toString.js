const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

let str = JSON.stringify(person);

console.log(str);
console.log(JSON.parse(str));
// ["Albert", 23, "dev.me@gmail.com"];
