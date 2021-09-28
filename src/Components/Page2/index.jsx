import React, { Component } from "react";
import "./Page2.css";

export default class Page2 extends Component {
  render() {
    const {
      backdrop_path,
      title,
      overview,
      vote_average,
      poster_path,
      popularity,
    } = this.props.movieId;

    return (
      <div className="Container_page2">
        <div className="Inter_baner">
          <div className="page2_info">
            <span className="page2_img">
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt="image"
              />
            </span>

            <div className="page2_title">
              <h1>{title}</h1>
              <strong>PLOT</strong>
              <p>
                <strong> {overview}</strong>
              </p>
              <p>
                <span>IMDB RATING</span>
                <strong className="page2_vote m-5">{vote_average}</strong>
              </p>
              <strong>DIRECTOR {popularity}</strong>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="image"
          />
        </div>
      </div>
    );
  }
}
