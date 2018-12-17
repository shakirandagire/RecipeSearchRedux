import { combineReducers } from 'redux'
import  { searchBarReducer } from './SearchBar'
import { searchIngredientsReducer } from './SearchIngredients/reducer';

export const rootReducer = combineReducers({
    searchBarReducer,
    searchIngredientsReducer,

  })
  
  
  