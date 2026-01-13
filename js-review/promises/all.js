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
