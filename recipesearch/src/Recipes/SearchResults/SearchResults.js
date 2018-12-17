import React, { Component } from "react";
import { connect } from "react-redux";
import { searchIngredientsAction } from "../SearchIngredients";
import { Link } from 'react-router-dom';

export class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div>
        {searchResults && searchResults.map((searchResult) => (
          <div  >
            <h1>{searchResult.strMeal}</h1>
            <p>{searchResult.strInstructions}</p>
            <img src={searchResult.strMealThumb} alt= {`${searchResult.strMeal}`}/>
            <Link to="/ingredients" onClick={() => {this.props.searchIngredientsAction(searchResult.idMeal)}}>View Ingredients</Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchBarReducer.searchResults
  };
};

const mapDispatchToProps = dispatch =>{
  return {
      searchIngredientsRecipesAction: (idMeal) => dispatch(searchIngredientsAction(idMeal))
  }
}

export const searchResultsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SearchResults);
