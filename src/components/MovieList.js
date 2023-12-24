import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.movies.map((movie) => (
              <div className="col-lg-4">
                <div className="card mb-4 shadow-sm">
                  <img src={movie.imageUrl}></img>
                  <div className="card-body">
                    <h2 className="card-title">{movie.name}</h2>
                    <p className="card-text">A film by Cristopher Nolan</p>
                    <h2>
                      <span className="badge badge-info" id="badge">
                        9.0
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4"></div>

          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}
