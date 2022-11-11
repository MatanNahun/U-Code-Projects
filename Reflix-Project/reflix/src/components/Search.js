import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../styles/Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          id="search-input"
          value={this.props.filterSearchTerm}
          onChange={this.props.handleInputSearch}
        ></input>
      </div>
    );
  }
}

export default Search;
