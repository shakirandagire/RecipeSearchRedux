/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchIngredients.css";
import { getIngredients } from "./selector";
export class SearchIngredientsResults extends Component {
  render() {
    const { ingredients } = this.props;
    return (
      <React.Fragment>
        <div>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Measures</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(ingredients).map(key => {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{ingredients[key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: getIngredients(state)
  };
};

export const searchIngredientsContainer = connect(mapStateToProps)(
  SearchIngredientsResults
);
