import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  render() {
    let classNameStyle = "";
    if (this.props.score >= 80) {
      classNameStyle = "high-score";
    } else if (this.props.score < 50) {
      classNameStyle = "low-score";
    } else {
      classNameStyle = "medium-score";
    }

    return <div className={classNameStyle}>{this.props.score}</div>;
  }
}

export default Score;
