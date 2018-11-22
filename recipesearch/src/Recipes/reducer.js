import { combineReducers } from 'redux'
import  searchBarReducer from './SearchBar/reducer'

export const rootReducer = combineReducers({
    searchBarReducer,
  })