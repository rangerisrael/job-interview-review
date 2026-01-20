function logName(this: { name: string }) {
  console.log(this.name);
}

const obj = { name: "Bob" };

type ThisOfLogName = ThisParameterType<typeof logName>;
// { name: string }

logName.call(obj); // Bob
