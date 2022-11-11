import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/User.css";

class User extends Component {
  render() {
    const userName = this.props.user.name;
    const userImg = this.props.user.img;
    return (
      <div className="user-card">
        <div>{userName}</div>
        <Link to="/catalog/">
          <div className="user-image">
            <img
              className="directory-img"
              height="200"
              width="200"
              src={userImg}
              alt="user-image"
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default User;
