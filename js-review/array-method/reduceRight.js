const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
