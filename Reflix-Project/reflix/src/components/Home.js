import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import User from "./User";

class Home extends Component {
  render() {
    const users = this.props.users;

    return (
      <div>
        <h1 id="users-title"> who's watching?</h1>
        <div id="users-container">
          {users.map((user) => {
            return <User className="user" key={user.id} user={user}></User>;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
