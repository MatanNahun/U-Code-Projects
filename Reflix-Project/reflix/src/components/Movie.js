import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/Movie.css";
class Movie extends Component {
  rentMovie = () => {
    const movieID = this.props.movie.id;
    this.props.rentMovie(movieID);
  };

  removeMovie = () => {
    const movieID = this.props.movie.id;
    this.props.removeMovie(movieID);
  };
  render() {
    const movieIsRented = this.props.movie.isRented;
    const movieTitle = this.props.movie.title;
    const movieImg = this.props.movie.img;
    const movieID = this.props.movie.id;

    return (
      <div className="movie-card">
        <div>{movieTitle}</div>
        <Link to={`/movies/${movieID}`}>
          <div className="movie-image">
            <img
              className="directory-img"
              height="200"
              width="200"
              src={movieImg}
              alt="movie"
            />
          </div>
        </Link>
        {movieIsRented ? (
          <button onClick={this.removeMovie}>remove</button>
        ) : (
          <button onClick={this.rentMovie}>rent</button>
        )}
      </div>
    );
  }
}

export default Movie;
