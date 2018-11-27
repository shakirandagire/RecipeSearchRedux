/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { connect } from "react-redux";

export class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div>
        {searchResults && searchResults.map((searchResult) => (
          <div key={searchResult.idMeal}>
            <h1>{searchResult.strMeal}</h1>
            <p>{searchResult.strInstructions}</p>
            <img src={searchResult.strMealThumb} alt= {`Picture for ${searchResult.strMeal}`}/>
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

export const searchResultsContainer = connect(
  mapStateToProps
)(SearchResults);