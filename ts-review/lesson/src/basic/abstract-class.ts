abstract class Bird {
  constructor(protected name: string) {}

  move() {
    console.log(`${this.name} is moving`);
  }

  abstract speak(): void;
}

// You want shared logic
// ✅ You need protected/private fields
// ✅ You want default behavior
// ✅ You want to enforce inheritance

interface Flyable {
  fly(): void;
}

// abstract class can only work as inheritance or children
class Animals extends Bird {
  speak(): void {
    throw new Error("Method not implemented.");
  }
  public name = "";

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

const animal = new Animals("dog");

animal.move();

abstract class Users {
  abstract name: string;
  abstract age: number;
  abstract address: string[];
}

interface IUsers {
  name: string;
  age: number;
  address: string[];
}

const userDetails: Users = {
  name: "",
  age: 0,
  address: [],
};

class UserImpl implements Users {
  name = "John";
  age = 30;
  address = ["Manila"];
}
