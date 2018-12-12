import React, { Component } from "react";
import { SearchBar } from "../SearchBar";
import { SearchResults } from "../SearchResults";

export class Root extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
