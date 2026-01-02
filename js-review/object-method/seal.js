const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

// seal only restricted to append and remove but modifying object is possible

if (Object.hasOwnProperty("name")) {
  Object.seal(person);
  person["name"] = "Jetro";

  //   wont work because seal only work for changing not adding or deleting
  delete person.name;
}

console.log(person.name);
// Jetro
