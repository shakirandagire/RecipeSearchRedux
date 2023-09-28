import { SEARCH_INGREDIENTS } from "./actiontypes";

const initialState = {
  recipeIngredients: null
};

export function searchIngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INGREDIENTS:
      return {
        recipeIngredients: action.payload
      };
    default:
      return state;
  }
}
