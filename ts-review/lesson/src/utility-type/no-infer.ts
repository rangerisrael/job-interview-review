function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>,
) {
  // ...
}
createStreetLight(["red", "yellow", "green"], "red"); // OK

//@ts-ignore
createStreetLight(["red", "yellow", "green"], "blue");

function wrapNoInfer<T>(value: NoInfer<T>) {
  return value;
}

function wrapInfer<T>(value: T) {
  return value;
}

const c = wrapNoInfer("hello"); // T inferred as unknown ❌
const d = wrapInfer("hello"); // T inferred as string ✅

//usecase for function and class generics
