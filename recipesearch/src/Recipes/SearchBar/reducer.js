const initialState = {
  searchResults: null
}

export default function searchBarReducer(state = initialState, action) {
  switch(action.type){
    case 'SEARCH_BAR':
    return{
      ...state,
      searchResults: action.payload
    }
    default:
    return state
  }
}
  