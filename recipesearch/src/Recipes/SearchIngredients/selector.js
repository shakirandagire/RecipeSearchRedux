const _ = require("lodash");
export const getIngredients = state => {
  const meals = state.searchIngredientsReducer.recipeIngredients;
  const ingredientsArray = [];
  const mearuresArray = [];
  let ingredientsMeasures;
  meals &&
    meals.map(meal => {
      for (const key in meal) {
        if (meal[key] !== "") {
          if (key.startsWith("strIngredient")) {
            ingredientsArray.push(meal[key]);
          }
          if (key.startsWith("strMeasure")) {
            mearuresArray.push(meal[key]);
          }
        }
      }
    });
  ingredientsMeasures = _.zipObject(ingredientsArray, mearuresArray);
  return ingredientsMeasures;
};
