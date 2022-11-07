import React, { Component } from "react";
import Letter from "./Letter";
import "./Letters.css";

class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available letters:</div>
        {Object.keys(this.props.letterStatus).map((l, v) =>
          this.props.letterStatus[l] ? (
            <Letter
              selectLetter={this.props.selectLetter}
              letter={l}
              key={v}
              className="chosen-letter"
            />
          ) : (
            <Letter
              selectLetter={this.props.selectLetter}
              letter={l}
              key={v}
              className="non-chosen-letter"
            />
          )
        )}
      </div>
    );
  }
}

export default Letters;
