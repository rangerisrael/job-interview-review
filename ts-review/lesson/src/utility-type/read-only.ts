const carts = {
  id: 1,
  products: [
    {
      id: 144,
      title: "Cricket Helmet",
      price: 44.99,
      quantity: 4,
      total: 179.96,
      discountPercentage: 11.47,
      discountedTotal: 159.32,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
    },
  ],
  total: 4794.8,
  discountedTotal: 4288.95,
  userId: 142,
  totalProducts: 5,
  totalQuantity: 20,
};

type ICart = ReturnType<() => typeof carts>;

let getOneCart: Readonly<ICart> = {
  id: 0,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: 0,
  totalProducts: 0,
  totalQuantity: 0,
};

//Cannot assign to 'id' because it is a read-only property.ts(2540)
//@ts-ignore
getOneCart["id"] = 2;
//@ts-ignore
getOneCart.products = ["apple"];
