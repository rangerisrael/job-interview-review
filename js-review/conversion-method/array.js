const arr = ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"];

// array to string

console.log(arr.join(" "));
console.log(arr.toLocaleString().replaceAll(",", " "));
console.log(
  JSON.stringify(arr)
    .replaceAll(",", " ")
    .replaceAll('"', "")
    .replaceAll('"', "")
    .replaceAll("[", "")
    .replaceAll("]", "")
);

// array to object

console.log(Object.fromEntries(arr.map((val, i) => [i, val])));

console.log(Object.assign({}, arr));

console.log({ ...arr });

const obj = {};

for (const [key, val] of Object.entries(arr)) {
  obj[key] = val;
}
let objLoop = {};

console.log(obj);

for (let index = 0; index < arr.length; index++) {
  objLoop[index] = arr[index];
}
console.log(objLoop);

console.log(Object.fromEntries(Array.from(arr, (char, i) => [i, char])));

// using reduce
console.log(
  arr.reduce((acc, cur, iteration) => {
    acc[iteration] = cur;
    return acc;
  }, {})
);

console.log(arr.reduce((acc, val, i) => ({ ...acc, [i]: val }), {}));

console.log(
  Object.keys(arr).reduce((acc, key) => {
    acc[key] = arr[key];

    return acc;
  }, {})
);

const arr2 = [1, 2, 3, 4, 5];

// array to number
const cvtoString = arr2.join("");

console.log(Number(cvtoString));
console.log(Number(arr2.toLocaleString().replaceAll(",", "")));
console.log(parseInt(arr2.toLocaleString().replaceAll(",", "")));
console.log(parseFloat(arr2.toLocaleString().replaceAll(",", "")));
console.log(+arr2.toLocaleString().replaceAll(",", ""));
console.log(~~arr2.toLocaleString().replaceAll(",", ""));
console.log(arr2.toLocaleString().replaceAll(",", "") * 1);

// array object = object array
const api = "https://dummyjson.com/todos";

async function fetchDatatoObj() {
  const req = await fetch(api).then((res) => res.json());

  // cvtoObj map
  const map = new Map();
  req.todos.forEach((todo, i) => map.set(i, todo));

  const entries = Object.fromEntries(Object.entries(req.todos));

  const reduce = req.todos.reduce((acc, cur, i) => {
    acc[i] = cur;

    return acc;
  }, {});

  const reduce2 = req.todos.reduce((acc, cur, i) => ({ ...acc, [i]: cur }), {});

  const assign = Object.assign({}, req.todos);

  let toObj = {};

  for (const [key, val] of Object.entries(req.todos)) {
    toObj[key] = val;
  }

  let obj2 = {};

  for (let i = 0; i < req.todos.length; i++) {
    obj2[i] = req.todos[i];
  }

  console.log({ ...req.todos });
  console.log(map);
  console.log(entries);
  console.log(reduce);
  console.log(reduce2);
  console.log(assign);
  console.log(toObj);
  console.log(obj2);
}
fetchDatatoObj();
// object-array - to array object
import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.0/+esm";

const apiComment = "https://dummyjson.com/comments";

async function fetchCommentoObjectToArray() {
  // array
  const req = await axios.get(apiComment);

  const { comments } = req.data;

  const toObj = { ...comments };

  const arr = Object.entries(toObj).map(([id, value]) => ({
    id,
    ...value,
  }));

  const toArr = [];

  for (const [key, value] of Object.entries(toObj)) {
    toArr[key] = value;
  }

  const reduceArray = Object.entries(toObj)
    .map(([id, value]) => ({ id, ...value }))
    .reduce((acc, cur) => {
      acc.push(cur);
      return acc;
    }, []);

  const viaMap = Object.entries(toObj).map(([id, value]) => ({
    id,
    ...value,
  }));

  let toForInArr = [];

  for (const key in toObj) {
    toForInArr[key] = toObj[key];
  }

  console.log(toForInArr, "to for in loop");
  console.log(viaMap, "to arr map");
  console.log(reduceArray, "to arr reduce");
  console.log(toArr, "to arr clone");
  console.log(arr, "to entries map");
  console.log(Object.assign([], toObj), "to assign");
}

fetchCommentoObjectToArray();
