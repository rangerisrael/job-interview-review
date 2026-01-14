// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
//  This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
// ith an array of objects that describe the outcome of each promise.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

// Promise.all - Needs ALL to succeed
Promise.all([promise1, promise2]);
// ✅ Success: [result1, result2, result3]
// ❌ If ANY fails: STOPS and rejects immediately

// Promise.race - Only cares about 1st place
Promise.race([promise1, promise2]);
// Returns: Only fastest result (1 winner)

// Promise.allSettled - Wants ALL results (success or fail)
Promise.allSettled([promise1, promise2]);
// ✅ Always succeeds, returns ALL results:
// [
//   { status: 'fulfilled', value: result1 },
//   { status: 'rejected', reason: error2 },
//   { status: 'fulfilled', value: result3 }
// ]

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// Expected output:
// "fulfilled"
// "rejected"

async function fetchMultipleUsersWithOneInvalidUrl(urls) {
  const promises = urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("Invalid endpoint", error))
  );

  // Destructuring arrays
  const [posts, invalid, ...rest] = await Promise.allSettled(promises);

  console.log(posts, "get post");
  console.log(invalid, "get invalid");
  console.log(rest, "get user");
}

fetchMultipleUsersWithOneInvalidUrl([
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
  "https://jsonplaceholder.typicode.com/invalid-endpoint",
  "https://jsonplaceholder.typicode.com/users",
]);
