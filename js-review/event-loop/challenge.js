console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

const req = new Promise((resolve, reject) => {
  resolve("3");
});

req.then((res) => console.log(res));

console.log("4");

// MEMORY => CALLSTACK -> SET TIMEOUT

// MACRO TASK QUEUE   -> event loop
// 2

// MICRO TASK QUEUE -> event loop -> if callstack is empty
// 3

//CONSOLE
// 1 4  3 2
