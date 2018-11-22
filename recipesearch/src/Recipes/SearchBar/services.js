import axios from "axios";

const recipesQuery = searchValue => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  const recipes = axios
    .get(url)
    .then(response => response.data.meals)
    .catch(error => {
      return error;
    });
    return recipes
};
export default recipesQuery;

