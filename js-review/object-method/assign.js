const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
  printIntroduction() {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`;
  },
};

const newPerson = {
  name: "Nelson",
  address: 23,
  emailed: "wondderful@gmail.com",
};

const returnedTarget = Object.assign(person, newPerson);

console.log(returnedTarget);
