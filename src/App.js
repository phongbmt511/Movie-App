import "./App.css";
import React, { Component } from "react";
import Navbar from "./Layouts/Navbar";
import Home from "./Layouts/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MoviesID from "./Containers/MoviesID";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviesID/:id" component={MoviesID} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
