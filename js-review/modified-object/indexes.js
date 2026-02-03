const str = "hello world";

console.log(...str);
console.log({ ...str });

console.log([...str]);

const todo = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

console.log("to object indexes to number property");

console.log({ ...todo });

// 0 {
//}
const backtooBJ = { ...todo };

console.log("OBJECT INDEXES TO ARRAY");

// console.log([...backtooBJ]);
console.log(" TypeError: backtooBJ is not iterable");

//cause error TypeError: backtooBJ is not iterable

const todoUpdate = {};

todo[2] = { ...todo[2], title: "Hello" };

console.log(todo);
