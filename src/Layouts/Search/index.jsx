// import axios from "axios";
import React, { Component } from "react";
import SearchUser from "../../Components/SearchUser";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div>
        <SearchUser />
      </div>
    );
  }
}
