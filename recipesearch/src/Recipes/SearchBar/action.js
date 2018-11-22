
import { SEARCH_BAR } from './actiontypes';
import recipesQuery from './services'

export function searchActionCreator(searchResults){
  return {
    type: SEARCH_BAR,
    payload: searchResults
  } 
};

export function searchRecipesAction(searchValue){
  return dispatch => {
    const recipes =  recipesQuery(searchValue)
    recipes
    .then(recipes => {
      dispatch(searchActionCreator(recipes))
    })
    .catch(error => {
      console.log(error)
    })
  }

}
