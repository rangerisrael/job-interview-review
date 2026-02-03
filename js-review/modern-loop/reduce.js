const comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

// to number count the id
const countUserId = comments.reduce((acc, cur) => acc + cur.id, 0);
console.log(countUserId, "user id total");

const countComments = comments.reduce((acc, cur) => acc + 1, 0);
console.log(countComments, "comment number");

// to string
const getSpecificName = comments.reduce((acc, curr) => {
  acc[curr.id] = curr.name.toUpperCase();
  return acc;
}, {});
console.log("Get Spefic Name");

console.log(getSpecificName);

// to object

//to array

//to boolean

// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// count the stack base on categories
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    // groub by categories
    // const getGroceries = res.products.reduce((acc, curr) => {
    //   if (curr.category === "groceries") {
    //     if (!acc["groceries"]) acc["groceries"] = [];
    //     acc["groceries"].push(curr);
    //   }
    //   return acc;
    // }, {});
    // console.log(getGroceries);
    // //count stocks
    // const getGroceriesByStock = res.products.reduce((acc, curr) => {
    //   if (curr.category === "groceries")
    //     acc[curr.sku] = (acc[curr.sku] || 0) + curr.stock;
    //   return acc;
    // }, {});
    // console.log(getGroceriesByStock);
  });

//get specific categories and get each stocks
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    // groub by categories

    const getGroceriesByStock = res.products.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.stock;

      return acc;
    }, {});

    const getGroceriesByLowInStock = res.products.reduce((acc, curr) => {
      acc[curr.availabilityStatus] =
        (acc[curr.availabilityStatus] || 0) + curr.stock;

      return acc;
    }, {});
    const countStocks = Object.values(getGroceriesByStock).reduce(
      (acc, curr) => acc + curr,
      0,
    );

    console.log(getGroceriesByLowInStock);
    console.log(getGroceriesByStock);
    console.log(countStocks);

    const groupDataEachCategories = res.products.reduce((acc, curr) => {
      if (!acc[curr.category]) acc[curr.category] = [];
      acc[curr.category].push(curr);

      return acc;
    }, {});

    console.log(groupDataEachCategories);
  });
