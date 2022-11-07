import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: "CALM", hint: "hint" },
      score: 99,
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  selectLetter = (letter) => {
    let updateLetterStatus = { ...this.state.letterStatus };
    updateLetterStatus[letter] = true;
    this.setState({
      letterStatus: updateLetterStatus,
    });
  };

  render() {
    return (
      <div>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
        />
        <Letters
          selectLetter={this.selectLetter}
          letterStatus={this.state.letterStatus}
        />
      </div>
    );
  }
}

export default App;
