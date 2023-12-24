import "./App.css";
import React, { Component } from "react";
import MovieList from "./components/MovieList";

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const baseUrl = " http://localhost:3002/movies";
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    this.setState({ movies: data });
  }
  render() {
    return (
      <div>
        <MovieList movies={this.state.movies}></MovieList>
      </div>
    );
  }
}

export default App;
