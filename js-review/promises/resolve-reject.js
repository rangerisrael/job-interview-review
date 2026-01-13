const pizzaList = ["pepperoni", "hawaian"];
const getOrderId = document.getElementById("orderList");

const ulList = `<ul>
          ${pizzaList.map((item) => `<li>${item}</li>`)}
        </ul> <button id='addPizza'>Add new pizza item</button>`;

getOrderId.innerHTML = ulList;

const orderPizza = function (pizzaType) {
  return new Promise((resolve, reject) => {
    const getMyPizza = pizzaType.charAt(0).toUpperCase() + pizzaType.slice(1);
    if (pizzaList.includes(pizzaType)) {
      console.log(
        "Please wait your order " +
          pizzaType.charAt(0).toUpperCase() +
          pizzaType.slice(1)
      );
      setTimeout(() => {
        resolve(`Your pizza ${pizzaType} successfully order`);
        console.log("Complete order");
      }, 3000);
    } else {
      reject("Sorry out of order " + getMyPizza);
    }
  });
};

orderPizza("pepperoni")
  .then((res) => {
    console.log("Fulfilled", res);
  })
  .catch((error) => {
    console.log("rejected", error);
  });

orderPizza("hawaian")
  .then((res) => {
    console.log("Fulfilled", res);
  })
  .catch((error) => {
    console.log("rejected", error);
  });

let getMyOrder = "";

orderPizza("pesto")
  .then((res) => {
    console.log("Fulfilled", res);
    getMyOrder += res;
  })
  .catch((error) => {
    console.log("Rejected", error);
  });

document.getElementById("addPizza").addEventListener("click", () => {
  const pizzaOptions = [
    "Supreme",
    "Margherita",
    "Pepperoni",
    "Hawaiian",
    "BBQ Chicken",
    "Vegetarian",
    "Meat Lovers",
    "Four Cheese",
  ];

  const randomPizza =
    pizzaOptions[Math.floor(Math.random() * pizzaOptions.length)];
  pizzaList.unshift(randomPizza);

  const ul = document.querySelector("div > ul");

  ul.insertAdjacentHTML("afterbegin", `<li>${randomPizza}</li>`);
});
