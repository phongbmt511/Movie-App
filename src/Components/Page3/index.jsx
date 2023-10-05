import React, { Component } from "react";
import "./Page3.css";

export default class Page3 extends Component {
  render() {
    const { budget, revenue, runtime } = this.props.movieId;
    return (
      <div>
        <div className="movie_conten">
          <span>
            {/* <span>
              <i class="far fa-clock m-3" style={{ fontSize: "40px" }}></i>
            </span> */}
            <span style={{ fontSize: "20px" }}>
              Running time : {Math.floor(runtime / 60)}h {runtime % 60}m
            </span>
          </span>

          <span className="left_bug m-5" style={{ fontSize: "20px" }}>
            {/* <span>
              <i
                class="far fa-money-bill-alt  mt-3"
                style={{ fontSize: "40px" }}
              ></i>
            </span> */}
            <span className="m-3">Budget : ${budget}</span>
          </span>

          <span className="right_reve" style={{ fontSize: "20px" }}>
            {/* <span>
              <i class="fas fa-ticket-alt" style={{ fontSize: "40px" }}></i>
            </span> */}
            <span className="m-3">Revenue : ${revenue}</span>
          </span>
        </div>
      </div>
    );
  }
}
