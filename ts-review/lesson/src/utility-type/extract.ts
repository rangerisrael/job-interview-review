const recipe = {
  id: 1,
  name: "Classic Margherita Pizza",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste",
  ] as const,
};

//convert object - union
type IRecipe = (typeof recipe)["ingredients"][number];

const getPizzaIngridientAvailable: Extract<IRecipe, "Pizza dough"> =
  "Pizza dough";

//if type not belong in extract
//Type '"Pizza doughr"' is not assignable to type '"Pizza dough"'.ts(2322)
