import axios from "axios";

const recipesIngredientsQuery = idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const recipes = axios
    .get(url)
    .then(response => response.data.meals)
    .catch(error => {
      return error;
    });
    return recipes
};
export default recipesIngredientsQuery;

