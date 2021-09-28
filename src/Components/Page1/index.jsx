import React, { Component } from "react";
import "./Page1.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


export default class Page1 extends Component {
  render() {
    const { original_title } = this.props.movieId;
    return (
      <div>
        <div className="PageNav">
          <span>
          <Link to="/" style={{textDecoration:"none" ,color:"white"}}>Home</Link>
          <p>|</p>
          </span>

          <span className="page_origi">{original_title}</span>
        </div>
      </div>
    );
  }
}
