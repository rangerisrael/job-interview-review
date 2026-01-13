// via Map
const apiProduct = "https://dummyjson.com/products";

//   group by product type and display all list belong to that particular date

async function getProductByGroupCategories(category) {
  const req = await fetch(apiProduct);
  const data = await req.json();

  const products = data.products;

  //   filter by category and date created
  const sortingProduct = products.sort(
    (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
  );

  const lookup = new Map();

  //  get categories
  const getCategories = sortingProduct.map((value) => value.category);

  //   remove duplicate categories
  const unique = [...new Set(getCategories)];

  unique.map((product) => {
    return lookup.set(
      product,
      sortingProduct.filter((val) => val.category === product)
    );
  });
  // group by categories
  const getGroup = category ? lookup.get(category) : lookup;

  console.log(getGroup);
}

getProductByGroupCategories();

async function getProductByGroupCategoriesYbyIndex(category) {
  const req = await fetch(apiProduct);
  const data = await req.json();

  const products = data.products;

  //   filter by category and date created
  const sortingProduct = products.sort(
    (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
  );

  //  get categories
  const getCategories = sortingProduct.map((value) => value.category);

  //   remove duplicate categories
  const unique = [...new Set(getCategories)];

  let obj = {};

  unique.map((product) => {
    obj[product] = sortingProduct.filter((val) => val.category === product);
  });
  // group by categories
  const getGroup = category ? obj[category] : obj;

  console.log(getGroup);
}

getProductByGroupCategoriesYbyIndex("groceries");

async function groupProductByKeys(key) {
  const req = await fetch(apiProduct);
  const data = await req.json();

  const products = data.products;

  //   filter by category and date created
  const sortingProduct = products.sort(
    (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
  );

  //  get categories
  const getCategories = sortingProduct.map((value) => value[key]);

  //   remove duplicate categories
  const unique = [...new Set(getCategories)];

  let obj = {};

  unique.map((product) => {
    if (key) {
      obj[
        `${key.charAt(0).toUpperCase() + key.slice(1)} ${
          typeof product == "number" ? Math.floor(product) : product
        }`
      ] = sortingProduct.filter((val) => val[key] == product);
    } else {
      obj[product] = sortingProduct.filter(
        (val) =>
          val.category === product &&
          val.stock > 10 &&
          Math.floor(val.price) > 9
      );
    }
  });
  // group by categories

  console.log(obj, "get group by keys");
}

groupProductByKeys("category");
