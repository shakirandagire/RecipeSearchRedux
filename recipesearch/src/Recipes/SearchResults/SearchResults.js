import React, { Component } from "react";
import { connect } from "react-redux";

export class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div>
        {searchResults.map((searchResult, index) => (
          <div key={index} className="results">
            <h1>{searchResult.strMeal}</h1>
            <p>{searchResult.strInstructions}</p>
            <img className="picture" src={searchResult.strMealThumb} alt="Food pic"/>
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
    mapStateToProps,
  )(SearchResults);
  