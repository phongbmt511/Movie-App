import React, { Component } from "react";
import "./Hello.css";
import { useHistory } from "react-router-dom";

const MovieItem = (props) => {
  const { moveBy } = props;
  const history = useHistory();

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="search-container">
        {moveBy.map((Item) => {
          const {
            title,
            release_date,
            original_language,
            vote_average,
            poster_path,
            id,
          } = Item;

          const onClickMovies = () => {
            history.push(`/moviesID/${id}`);
          };

          return (
            <div className="Movies_Item" onClick={onClickMovies}>
              <div className="Movies_Item_Image mt-4">
                <span className="Vote_Movie">{vote_average}</span>
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                />
              </div>
              <p className="title_name mt-2">
                <span className="title_P">P</span>
                {title}
              </p>

              <div className="document d-flet mt-3">
                <span className="document_left">
                  Language : {original_language}
                </span>
                <span className="document_right">{release_date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieItem;
