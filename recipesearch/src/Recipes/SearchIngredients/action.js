import { SEARCH_INGREDIENTS } from "./actiontypes";
import recipesIngredientsQuery from "./services";

export function searchIngrendientsActionCreator(recipeIngredients) {
  return {
    type: SEARCH_INGREDIENTS,
    payload: recipeIngredients
  };
}

export function searchIngredientsRecipesAction(idMeal) {
  return dispatch => {
    const recipes = recipesIngredientsQuery(idMeal);
    recipes
      .then(recipes => {
        dispatch(searchIngrendientsActionCreator(recipes));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
