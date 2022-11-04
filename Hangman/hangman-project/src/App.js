import "./App.css";
import { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <Score />
        <Solution />
        <Letters />
      </div>
    );
  }
}

export default App;
