import React, { Component } from "react";
import "./Letter.css";

class Letter extends Component {
  render() {
    return <span className={this.props.className}>{this.props.letter} </span>;
  }
}

export default Letter;
