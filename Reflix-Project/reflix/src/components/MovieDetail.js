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
    return <div>{relevantMovie.title}</div>;
  }
}

export default MovieDetail;
