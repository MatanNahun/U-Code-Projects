import React, { Component } from "react";
import Letter from "./Letter";

class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available Letters</div>
        <Letter />
      </div>
    );
  }
}

export default Letters;
