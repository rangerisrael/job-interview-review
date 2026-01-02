const person = {
  name: "Albert",
  address: 23,
  email: "dev.me@gmail.com",
};

console.log(Object.keys(person));
// [ 'name', 'address', 'email' ]

// Problem 1: User Profile Validator (Easy)
// Create a function validateProfile(profile) that takes a user profile object and returns true if it has both 'username' and 'email' keys, otherwise returns false.

function validateProfile(user = {}) {
  const arrList = ["username", "email"];
  let findIdentity = Object.keys(user).filter((value) =>
    arrList.includes(value)
  );

  if (findIdentity.includes("username") && findIdentity.includes("email")) {
    return true;
  } else {
    return false;
  }
}

validateProfile({
  username: "israel123",
  email: "israel@example.com",
});
// Output: true

console.log(validateProfile({ username: "john" }));
// Output: false

console.log(validateProfile({ email: "test@test.com" }));
// Output: false

console.log(
  validateProfile({ username: "jane", email: "jane@test.com", age: 25 })
);

// ### Problem 1: Count Properties (Easy)
// Create a function `countProperties(obj)` that returns the number of properties in an object.

function countProperties(obj) {
  // Write your code here
  return Object.keys(obj).length;
}

console.log(countProperties({ name: "Israel", age: 25, city: "Manila" }));

// Output: 3

console.log(countProperties({ a: 1 }));

// Output: 1

console.log(countProperties({}));

// Output: 0

// Problem 2: Filter Keys by Length (Medium)
// Create a function getShortKeys(obj, maxLength) that returns an array of keys that have a length less than or equal to maxLength.

function getShortKeys(obj, maxLength) {
  // Write your code here
  let counts = [];
  for (const keys in obj) {
    if (obj[keys].toString().split("").length <= maxLength) {
      counts.push(keys);
    }
  }
  return counts;
}

console.log(getShortKeys({ name: "Israel", id: 123, address: "Caloocan" }, 3));

// Output: ['id']
console.log(getShortKeys({ a: 1, bb: 2, ccc: 343, dddd: 453 }, 2));

// Output: ['a', 'bb']
