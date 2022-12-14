import React, { Component } from "react";
import "./Letter.css";

class Letter extends Component {
  selectLetter = () => {
    this.props.selectLetter(this.props.letter);
  };
  render() {
    return (
      <span onClick={this.selectLetter} className={this.props.className}>
        {this.props.letter}{" "}
      </span>
    );
  }
}

export default Letter;
