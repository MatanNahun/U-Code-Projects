import React, { Component } from "react";

class EndGame extends Component {
  render() {
    return (
      <div>
        {this.props.data} {this.props.word}
      </div>
    );
  }
}

export default EndGame;
