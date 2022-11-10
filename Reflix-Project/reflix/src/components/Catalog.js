import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Movie from "./Movie";

class Catalog extends Component {
  render() {
    const movies = this.props.movies;
    console.log(movies);

    return (
      <div>
        <h1 id="movies-rented-title">rented:</h1>
        <div id="movies-rented-container">
          {movies
            .filter((movie) => movie.isRented === true)
            .map((movie) => {
              return (
                <Movie className="movie" key={movie.id} movie={movie}></Movie>
              );
            })}
        </div>
        <h1 id="movies-catalog-title">Catalog:</h1>
        <div id="movies-catalog-container">
          {movies.map((movie) => {
            return (
              <Movie className="movie" key={movie.id} movie={movie}></Movie>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
