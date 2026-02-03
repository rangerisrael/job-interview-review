Promise.resolve().then(() => console.log("1"));

setTimeout(() => {
  console.log("2");
}, 1000);

queueMicrotask(() => {
  console.log("3");
});

console.log("4");
