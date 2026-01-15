const album = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

// object - to string
console.log(JSON.stringify(album));
console.log(Object.values(album).join(","));
console.log(
  Object.entries(album)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ")
);

// object -  to array object
const toArr = Object.entries(album).map(([key, value]) => ({
  key,
  value,
}));

const reduceArr = Object.entries(album).reduce((acc, cur) => {
  acc.push({ key: cur[0], value: cur[1] });

  return acc;
}, []);

let toArrClone = [];

for (const [value, key] of Object.entries(album)) {
  toArrClone.push({
    id: key,
    value: value,
  });
}

let toArrayForIn = [];

for (const key in album) {
  toArrayForIn.push({ id: key, value: album[key] });
}

const reduceArr2 = Object.entries(album).reduce(
  (acc, cur) => (acc.push({ key: cur[0], value: cur[1] }), acc),
  []
);

const reduceArr3 = Object.entries(album).reduce(
  (acc, cur) => acc.concat({ key: cur[0], value: cur[1] }),
  []
);

const objKeysToArr = Object.keys(album).reduce((acc, key) => {
  acc.push({ id: key, value: album[key] });

  return acc;
}, []);

console.log(objKeysToArr, "keys");
console.log(toArrClone, "clone");
console.log(toArrayForIn, "for in");
console.log(toArr, "entries");
console.log(reduceArr, "reduce");
console.log(reduceArr2, "reduce");
console.log(reduceArr3, "reduce");

// object to single array

console.log(Object.assign([], album));

// api object to array
const apiProduct = "https://dummyjson.com/products";

async function convertProductToArraytoObject() {
  const req = await fetch(apiProduct)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const { products } = req;

  // array to object
  const assign = Object.assign({}, products);
  const spread = { ...products };
  const map = new Map();
  products.forEach((value, i) => map.set(i, value));

  const keys = Object.keys(products).reduce((acc, key) => {
    acc[key] = products[key];

    return acc;
  }, {});

  const entries = Object.fromEntries(Object.entries(products));

  const forOf = {};

  for (const [key, value] of Object.entries(products)) {
    forOf[key] = value;
  }

  const reduce2 = products.reduce((acc, cur, i) => ({ ...acc, [i]: cur }), {});
  const reduce3 = products.reduce((acc, cur, i) => {
    acc[i] = cur;
    return acc;
  }, {});

  console.log(assign);
  console.log(spread);
  console.log(map);
  console.log(keys);
  console.log(entries);
  console.log(forOf);
  console.log(reduce2);
  console.log(reduce3);

  // object to array
  const toArrayAssign = Object.assign([], spread);
  const toEntriesArr = Object.entries(spread).map(([value]) => ({
    ...value,
  }));

  const toReduceArr = Object.entries(spread).reduce((acc, cur, i) => {
    acc.push(cur[1]);
    return acc;
  }, []);

  const toReducerConcat = Object.entries(spread).reduce(
    (acc, cur) => acc.concat(cur[1]),
    []
  );

  const keyReducer = Object.keys(spread).reduce((acc, key) => {
    acc.push(spread[key]);
    return acc;
  }, []);

  let toArrOf = [];

  for (const [, value] of Object.entries(spread)) {
    toArrOf.push(value);
  }
  let forInArr = [];
  for (const value in spread) {
    forInArr.push(value);
  }

  console.log(toArrayAssign, "to assign array");
  console.log(toEntriesArr, "to array entries");
  console.log(toReduceArr, "to array reduce");
  console.log(toReducerConcat, "to array concat");
  console.log(keyReducer, "to array keys");
  console.log(toArrOf, "to array toArrOf");
  console.log(forInArr, "to array forInArr");
}
convertProductToArraytoObject();
