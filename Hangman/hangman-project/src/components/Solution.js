import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.solution.word
            .split("")
            .map((l) =>
              this.props.letterStatus[l] ? (
                <Letter letter={l}></Letter>
              ) : (
                <Letter letter="_ "></Letter>
              )
            )}
          <div>
            <em>{this.props.solution.hint}</em>
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;
