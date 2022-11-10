import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Movie from "./Movie";

import "../styles/Catalog.css";

class Catalog extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div id="catalog">
        <h1 id="movies-rented-title">rented:</h1>
        <div id="movies-rented-container">
          {movies
            .filter((movie) => movie.isRented === true)
            .map((movie) => {
              return (
                <Movie
                  className="movie"
                  key={movie.id}
                  movie={movie}
                  removeMovie={this.props.removeMovie}
                ></Movie>
              );
            })}
        </div>
        <h1 id="movies-catalog-title">Catalog:</h1>
        <div id="movies-catalog-container">
          {movies.map((movie) => {
            return (
              <Movie
                className="movie"
                key={movie.id}
                movie={movie}
                rentMovie={this.props.rentMovie}
              ></Movie>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
