// the Promise.race() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise settles with the eventual state of the first promise that settles.

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

async function fetchFastestApiCompetition() {
  const request = [
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((r) => r.json())
      .then((data) => ({ source: "API 1", data })),

    // Simulate a slower endpoint
    new Promise((resolve) =>
      setTimeout(
        () =>
          fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((r) => r.json())
            .then((data) => resolve({ source: "API 2 (slower)", data })),
        1000
      )
    ),

    // Simulate another endpoint
    new Promise((resolve) =>
      setTimeout(
        () =>
          fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((r) => r.json())
            .then((data) => resolve({ source: "API 3 (slowest)", data })),
        2000
      )
    ),
  ];

  const whoseWin = await Promise.race(request);

  console.log(whoseWin);
}
fetchFastestApiCompetition();

async function whoseQualifiedCandidates() {
  const applicant = [
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Applicant 1 win");
      }, 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('"Applicant 2 win');
      }, 2000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('"Applicant 3 win');
      }, 5000);
    }),
    new Promise((resolve) =>
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((r) => r.json())
        .then((data) => resolve({ source: "Applicant 4 win", data }))
    ),
  ];

  // whose applicant win
  const qualifiedCandidates = await Promise.race(applicant);

  console.log(qualifiedCandidates); //   win applicant 1
}

whoseQualifiedCandidates();
