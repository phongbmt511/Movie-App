import React, { Component } from "react";
//import "./nav.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark"
          style={{ height: "120px" }}
        >
          <div className="container-md">
            <a className="navbar-brand" href="#">
              Movie App
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
