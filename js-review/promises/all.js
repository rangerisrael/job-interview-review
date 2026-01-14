// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// that has different state pending,fullfilled and reject

// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

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

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

async function fetchMultipleAPIs() {
  const apiUrls = [
    "https://dummyjson.com/users",
    "https://dummyjson.com/posts",
  ];

  try {
    // 1. Create an array of fetch promises
    const promises = apiUrls.map((url) => fetch(url));

    // 2. Wait for all initial fetch requests to complete
    const responses = await Promise.all(promises);

    // 3. Process the responses (e.g., parse as JSON)
    // Note: response.json() also returns a promise, so we use Promise.all again
    const dataPromises = responses.map((response) => response.json());

    // 4. Wait for all data parsing promises to complete
    const data = await Promise.all(dataPromises);

    // 5. Use the aggregated data (an array of JSON results)
    console.log(data);
    return data;
  } catch (error) {
    // This block executes if *any* of the promises reject (e.g., a network error or 404)
    console.error("One of the API calls failed:", error);
    throw error;
  }
}

// Call the function
fetchMultipleAPIs();

const apiUsers = "https://jsonplaceholder.typicode.com/users";

async function fetchMultipleUsers(ids) {
  const promises = ids.map(
    async (id) => await fetch(apiUsers + "/" + id).then((res) => res.json())
  );

  const users = await Promise.all(promises);

  console.log(users, "get all users belongs to id");
}

fetchMultipleUsers([1, 2, 3, 4]);

async function fetchMultipleUsersWithOneInvalidUrl(urls) {
  const promises = urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("Invalid endpoint", error))
  );

  // Destructuring arrays
  const [posts, invalid, ...rest] = await Promise.all(promises);

  console.log(posts, "get post");
  console.log(invalid, "get post");
  console.log(rest, "get user");
}

fetchMultipleUsersWithOneInvalidUrl([
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
  "https://jsonplaceholder.typicode.com/invalid-endpoint",
  "https://jsonplaceholder.typicode.com/users",
]);
