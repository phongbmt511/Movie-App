import React, { Component } from "react";

export default class MovieMore extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          style={{
            backgroundColor: "gray",
            borderRadius: "4px",
            padding: "5px",
            width: "90px",
            color: "white",
            marginLeft: "50%",
            marginBottom: "50px",
          }}
          onClick={this.props.handleMore}
        >
          More
        </button>
      </div>
    );
  }
}
