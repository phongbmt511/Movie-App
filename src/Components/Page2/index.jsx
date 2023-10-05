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
      // <div className="Container_page2">
      //   <div className="Inter_baner">
      //     <div className="page2_info">
      //       <span className="page2_img">
      //         <img
      //           src={`https://image.tmdb.org/t/p/original${poster_path}`}
      //           alt="image"
      //         />
      //       </span>

      //       <div className="page2_title">
      //         <h1>{title}</h1>
      //         <strong>PLOT</strong>
      //         <p>
      //           <strong>{overview}</strong>
      //         </p>
      //         <p>
      //           <span>IMDB RATING</span>
      //           <strong className="page2_vote m-5">{vote_average}</strong>
      //         </p>
      //         <strong>DIRECTOR {popularity}</strong>
      //       </div>
      //     </div>
      //     <img
      //       src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      //       alt="image"
      //     />
      //   </div>
      // </div>
      <div>
        <div className="bg-dark text-white">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            className="card-img"
            style={{ opacity: "0.3" }}
            alt="image_poster"
          />
          <div className="card-img-overlay" style={{ marginTop: "200px" }}>
            <div
              className=" card card-dark bg-dark mb-3 text-white"
              style={{
                maxWidth: "900px",
                //position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8" style={{ fontFamily: "cursive" }}>
                  <div className="card-body">
                    <h3 className="card-title" style={{ fontSize: "30px" }}>
                      {title}
                    </h3>
                    <p
                      className="card-text"
                      style={{ marginTop: "30px", fontSize: "18px" }}
                    >
                      {overview}
                    </p>
                    <p
                      className="card-text"
                      style={{ fontSize: "13px", marginTop: "30px" }}
                    >
                      <p className="card-text">IMDB RATING : {vote_average}</p>
                      <p className="card-text">DIRECTOR : {popularity}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
