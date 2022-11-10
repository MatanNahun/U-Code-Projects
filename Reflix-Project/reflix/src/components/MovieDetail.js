import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MovieDetail extends Component {
  render() {
    const movies = this.props.movies;
    const movieID = parseInt(this.props.match.params.movieID);
    const relevantMovie = movies.find((movie) => movie["id"] === movieID);
    console.log(movies);
    console.log(movieID);
    console.log(relevantMovie);
    // const relevantMovie = movies[]
    return (
      <div>
        <div>
          {relevantMovie.title} {`(`}
          {relevantMovie.year}
          {`)`}{" "}
        </div>
        <div>
          <img
            className="movie-detail-img"
            height="300"
            width="300"
            src={relevantMovie.img}
            alt="movie-image"
          />
        </div>
        <div className="movie-description">{relevantMovie.descrShort}</div>
      </div>
    );
  }
}

export default MovieDetail;
