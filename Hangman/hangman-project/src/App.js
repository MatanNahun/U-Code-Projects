import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";

const SECRET_WORD = "CALM";
const HINT = "Your ideal mood when coding";
const INITAL_SCORE = 100;

const ASCII_INDEX_END = 91;
const ASCII_INDEX_STARTER = 65;

const CORECT_LETTER_SCORE = 5;
const WRONG_LETTER_SCORE = 20;

const LOSING_GAME_SCORE = 1;

const WIN_MESSAGE = "Congratulations! you rock!";
const LOSE_MESSAGE = "Sorry, you lost the word was.....";

class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: SECRET_WORD, hint: HINT },
      score: INITAL_SCORE,
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = ASCII_INDEX_STARTER; i < ASCII_INDEX_END; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  isWon = () => {
    for (let i = 0; i < this.state.solution.word.length; i++) {
      console.log(this.state.solution.word[i]);
      if (this.state.letterStatus[this.state.solution.word[i]] === false) {
        console.log("not won");
        return false;
      }
    }
    console.log("won");
    return true;
  };

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
    let endGameWin = <EndGame word={""} data={WIN_MESSAGE}></EndGame>;
    let endGameLose = (
      <EndGame word={this.state.solution.word} data={LOSE_MESSAGE}></EndGame>
    );
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
        <div>{this.isWon() ? endGameWin : ""} </div>
        <div>{this.state.score < LOSING_GAME_SCORE ? endGameLose : ""}</div>
      </div>
    );
  }
}

export default App;
