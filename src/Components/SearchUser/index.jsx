import React, { Component } from "react";
import "./UserNet.css";

export default class SearchUser extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="SearchNet">
        <div className="search">
          <form onSubmit={this.props.onSubmitSearchUser}>
            <input
              type="text"
              placeholder="Search Movie"
              value={this.props.search}
              className="Tvinput"
              onChange={this.props.onSearchChange}
            />
            <button type="submit" className="btn_sub">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}