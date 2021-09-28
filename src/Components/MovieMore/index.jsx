import React, { Component } from "react";


export default class MovieMore extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" style={{width:"300px" ,marginLeft:"35%" }} onClick={this.props.handleMore}>
          More
        </button>
      </div>
    );
  }
}

