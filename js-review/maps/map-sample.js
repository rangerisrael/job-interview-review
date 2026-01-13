// challenge fetch data and lookup using map

// When Developers Actually Use Map
// ✓ Common uses:

// Caching/memoization (storing function results)
// Storing data by ID for fast lookup
// Tracking state with complex keys
// Performance-critical applications

// ✗ Less common:

// Simple lists of items
// Data from APIs (usually comes as arrays)
// When you need to send data as JSON

const api_user = "https://jsonplaceholder.typicode.com/users";

// using then
fetch(api_user)
  .then((res) => res.json())
  .then((res) => {
    const lookup = new Map();
    // iterate the data
    res.forEach((user) => lookup.set(user.id, user));

    // console.log(lookup.get(1));
  });

// using async await
async function loadUsers(id) {
  const req = await fetch(api_user);
  const data = await req.json();

  const lookup = new Map();

  data.forEach((user) =>
    lookup.set(user.id + user.username + user.email, user)
  );

  const getRequest = id ? lookup.get(id) : lookup;

  console.log(getRequest, "get req by map");
  console.log(performance.now());
}

async function loadUsersviaMap(id) {
  const req = await fetch(api_user);
  const data = await req.json();

  const lookup = new Map();

  data.forEach((user) => lookup.set(user.id, user));

  const getRequest = id ? lookup.get(id) : lookup;

  console.log(getRequest, "get req by map object");
  console.log(performance.now());
}

loadUsersviaMap(1);

async function loadUsersviaArray(params) {
  const req = await fetch(api_user);
  const data = await req.json();

  //  find
  const getId = data.find((user) => user.id == params);

  const getIdx = data.findIndex((user) => user.id === params);

  const getReq = getIdx !== -1 ? data[getIdx] : data;

  console.log(getReq, "get array request");

  console.log(performance.now());
}

loadUsersviaArray(1);

async function loadUsersviaArraytoObject(id) {
  const req = await fetch(api_user);
  const data = await req.json();

  //  find
  const toObj = Object.fromEntries(data.map((user, i) => [user.id, user]));

  const getReq = id ? toObj[id] : toObj;
  console.log(getReq, "get object request");

  console.log(performance.now());
}

loadUsersviaArraytoObject();

async function removeMany(start, end) {
  const req = await fetch(api_user);
  const data = await req.json();

  const updateUser = {
    id: 11,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: [Object],
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  };
  //  find
  data.splice(start ?? 0, end ?? 1, updateUser);

  console.log(data, "remove data");
}

async function removeByFilter(ids) {
  const req = await fetch(api_user);
  const data = await req.json();

  const updateUser = {
    id: 11,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: [Object],
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  };
  //  find
  const filteredData = data.filter((user) => !ids.includes(user.id));

  console.log(filteredData, "remove data byu filter");
}

async function updateByUsingOIndexes(id) {
  const req = await fetch(api_user);
  const data = await req.json();

  //  find
  const getIndex = data.findIndex((user) => user.id == id);

  if (getIndex !== -1) {
    data[getIndex].name = "Steven Lebsack";

    console.log(data, "get updated record");
  }
}

updateByUsingOIndexes(1);

async function updateByUsingObjectAssign(id) {
  const req = await fetch(api_user);
  const data = await req.json();

  //  find
  const getIndex = data.findIndex((user) => user.id == id);

  if (getIndex !== -1) {
    const oldData = data[getIndex];

    const updateUser = {
      name: "Steven Lebsack",
      username: "Steven",
      email: "steven@org",
    };

    data[getIndex] = Object.assign(oldData, updateUser);

    console.log(data[getIndex], "get updated record 2");
  }
}

updateByUsingObjectAssign(1);
