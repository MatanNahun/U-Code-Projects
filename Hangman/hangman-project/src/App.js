import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

const CORECT_LETTER_SCORE = 5;
const WRONG_LETTER_SCORE = 20;

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: "CALM", hint: "hint" },
      score: 50,
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
      score: this.updateScore(letter),
    });
  };

  updateScore = (letter) => {
    if (this.state.solution.word.includes(letter)) {
      return this.state.score + CORECT_LETTER_SCORE;
    } else {
      return this.state.score - WRONG_LETTER_SCORE;
    }
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
