import React, { Component } from "react";
import "./Page1.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default class Page1 extends Component {
  render() {
    const { original_title } = this.props.movieId;
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {original_title}
            </li>
          </ol>
        </nav>

        {/* <div className="PageNav">
          <span>
          <Link to="/" style={{textDecoration:"none" ,color:"white"}}>Home</Link>
          <p>|</p>
          </span>

          <span className="page_origi">{original_title}</span>
        </div> */}
      </div>
    );
  }
}
