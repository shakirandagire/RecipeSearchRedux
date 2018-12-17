import React, { Component } from "react";
import { Recipes } from "./Recipes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SearchIngredients } from "./Recipes";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Recipes} />
            <Route path="/ingredients" component={SearchIngredients} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
