import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.solution.word.split("").map((l) => (
            <Letter letter={l}></Letter>
          ))}
          <div>{this.props.solution.hint}</div>
        </div>
      </div>
    );
  }
}

export default Solution;
