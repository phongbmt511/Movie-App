import React, { Component } from "react";
//import "./UserNet.css";

export default class SearchUser extends Component {
  render() {
    console.log(this.props);
    return (
      // <div className="SearchNet">
      //   <div className="search">
      //     <form onSubmit={this.props.onSubmitSearchUser}>
      //       <input
      //         type="text"
      //         placeholder="Search Movie"
      //         value={this.props.search}
      //         className="Tvinput"
      //         onChange={this.props.onSearchChange}
      //       />
      //       <button type="submit" className="btn_sub">
      //         <i class="fas fa-search"></i>
      //       </button>
      //     </form>
      //   </div>
      // </div>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Movie App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" onSubmit={this.props.onSubmitSearchUser}>
              <input
                type="search"
                placeholder="Search Movie"
                value={this.props.search}
                className="Tvinput form-control me-2"
                onChange={this.props.onSearchChange}
              />
              <button className="btn_sub btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
