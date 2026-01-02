const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

console.log(Object.getOwnPropertyDescriptor(person, ["name"]));
console.log(Object.getOwnPropertyDescriptor(person, "address"));
console.log(Object.getOwnPropertyDescriptor(person, "email"));
