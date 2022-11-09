import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/User.css";

class User extends Component {
  render() {
    const userName = this.props.user.name;
    const userImg = this.props.user.img;
    return (
      <div>
        <div>{userName}</div>
        <div className="user-image">
          <img
            className="directory-img"
            height="200"
            width="200"
            src={userImg}
            alt="user-image"
          />
        </div>
      </div>
    );
  }
}

export default User;
