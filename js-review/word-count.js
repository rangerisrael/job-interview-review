// create a string value and able to count each letter inside of it

function wordCount(word) {
  let count = {};

  for (const value of word) {
    count[value] = (count[value] ?? 0) + 1;
  }

  //   convert to array
  let cvtoArr = Object.entries(count).flatMap(
    ([key, val]) => `${key} => ${val}`
  );
  let backtoObj = Object.fromEntries(cvtoArr.map((val, i) => [i, val]));

  return backtoObj;
}

let getEachWordLength = wordCount(
  "SAAAAAlLLsldsakdaksdwqeuiwqeoiqwmsfdsrfwerjwewqadfsasasa"
);

console.log(getEachWordLength);
