import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available letters:</div>
        {Object.keys(this.props.letterStatus).map((l) => (
          <Letter letter={l}></Letter>
        ))}
      </div>
    );
  }
}

export default Letters;
