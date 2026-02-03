// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

// const isSummer = false;
// const fruits = {
//   apple: 10,
//   banana: 5,
//   ...(isSummer ? { watermelon: 30 } : {}),
// };
// ...(isSummer && { watermelon: 30 }),

const objDetails = {
  name: "alex",
  email: "alet.to@gmail.com",
};

const toArray = Object.assign([], objDetails);

console.log(toArray, "object assigned to array");

const toObj = Object.assign({}, toArray);

console.log(toObj, "array assign to object");

// modified through object

const postData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];

console.log("modfied object assign data");

console.log(
  Object.assign(postData[3], {
    body: "Hello world",
  }),
);

//modified by object

console.log("Modified by object");

const user = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

console.log(
  Object.assign(user, {
    body: "Continous learning",
  }),
);

console.log(
  Object.assign(
    {},
    { name: "alex", email: "alex.to.cv@w23" },
    { age: 20 },
    { address: "baculao city" },
    [
      {
        rating: 100,
        view: 10,
      },
      {
        rating: 80,
        view: 10,
      },
    ],
  ),
);

console.log("transformation");

(Object.assign(postData[3], {
  body: "Hello worldswew",
}),
  console.log(postData));
