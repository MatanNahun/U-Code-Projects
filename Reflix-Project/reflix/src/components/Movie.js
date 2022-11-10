import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/User.css";

class Movie extends Component {
  render() {
    const movie = this.props.movie;
    const movieTitle = this.props.movie.title;
    const movieImg = this.props.movie.img;
    const movieID = this.props.movie.id;

    console.log(movie);
    return (
      <div>
        <div>{movieTitle}</div>
        <Link to={`/movies/${movieID}`}>
          <div className="movie-image">
            <img
              className="directory-img"
              height="200"
              width="200"
              src={movieImg}
              alt="movie-image"
            />
          </div>
        </Link>
        <button>rent</button>
      </div>
    );
  }
}

export default Movie;
