import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.0/+esm";

const restaurantApi = "https://dummyjson.com/recipes";

async function getOrder() {
  try {
    const request = await axios.get(restaurantApi);

    console.log(request.data.recipes);
  } catch (error) {
    console.log(error);
  }
}
getOrder();
