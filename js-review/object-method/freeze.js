const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

// freeze purpose to restrict appending,removing or changing value and property

if (Object.hasOwnProperty("name")) {
  Object.freeze(person);
  person["name"] = "Jetro";
}

console.log(person.name);
// Albert
