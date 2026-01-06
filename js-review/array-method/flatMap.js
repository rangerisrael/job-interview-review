// The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array,
//  and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()),
// but slightly more efficient than calling those two methods separately.
// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
const arr2 = [1, 2, 3, 4];

arr2.flatMap((x) => [x, x * 2]);
// is equivalent to
const n = arr2.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr2[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
