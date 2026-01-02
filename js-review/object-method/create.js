const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
  printIntroduction() {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`;
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

// Jetro
console.log(person.printIntroduction());
console.log(me.printIntroduction());
