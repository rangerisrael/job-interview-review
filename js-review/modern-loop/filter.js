const apiPost = "https://dummyjson.com/posts";

const fetchPost = async () => {
  const req = await fetch(apiPost);
  const resp = await req.json();

  return resp;
};

//group by using utility
fetchPost().then((res) => {
  const { posts } = res;

  // group by
  !Array.isArray(posts) && null;

  const postGrouping = Object.groupBy(posts, ({ tags }) =>
    tags?.some((item) => item.toLowerCase().includes("history"))
      ? "history"
      : tags?.some((item) => item.toLowerCase().includes("french"))
        ? "french"
        : "all",
  );

  console.table(postGrouping.history.slice(0, 5));
});

//groupby using filter
fetchPost().then((res) => {
  const { posts } = res;

  // group by
  !Array.isArray(posts) && null;

  const keys = [
    "all",
    "history",
    "french",
    "magical",
    "crime",
    "english",
    "classic",
  ];

  const postGrouping = keys.map((key) => [
    key,
    key == "all"
      ? posts.filter(({ tags }) => !tags.some((tag) => keys.includes(tag)))
      : posts.filter(({ tags }) => tags.some((tag) => tag.includes(key))),
  ]);

  const toObj = Object.fromEntries(postGrouping);

  console.log(toObj.all);
});

//groupp by using reduce

fetchPost().then((res) => {
  const { posts } = res;

  // group by
  !Array.isArray(posts) && null;

  const keys = [
    "all",
    "history",
    "french",
    "magical",
    "crime",
    "english",
    "classic",
  ];

  const postGrouping = posts.reduce((acc, current) => {
    keys.forEach((key) => {
      //   if (current.tags.some((tag) => tag.includes(key))) {
      //     if (!acc[key]) acc[key] = [];
      //     acc[key].push(current);
      //   }
      //   if (!current.tags.some((tag) => keys.includes(tag))) {
      //     if (!acc[key]) acc[key] = [];
      //     acc[key].push(current);
      //   }

      if (!acc[key]) acc[key] = [];

      current.tags.some((tag) => tag.includes(key))
        ? acc[key].push(current)
        : !current.tags.some((tag) => keys.includes(tag))
          ? acc[key].push(current)
          : [];
    });

    return acc;
  }, {});

  console.table(postGrouping);
});
