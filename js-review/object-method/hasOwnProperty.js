const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

if (Object.hasOwnProperty("name")) {
  person["name"] = "Jetro";
}

console.log(person);
// [ 'name', 'address', 'email' ]
