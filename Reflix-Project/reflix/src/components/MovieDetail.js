import React, { Component } from "react";
import "../styles/MovieDetail.css";

class MovieDetail extends Component {
  render() {
    const movies = this.props.movies;
    const movieID = parseInt(this.props.match.params.movieID);
    const relevantMovie = movies.find((movie) => movie["id"] === movieID);

    return (
      <div id="movieDetail">
        <div className="title">
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
