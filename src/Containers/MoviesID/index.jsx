import React, { Component } from "react";
import axios from "axios";
import Page1 from "../../Components/Page1";
import Page2 from "../../Components/Page2";
import Page3 from "../../Components/Page3";
import { withRouter } from "react-router";
import Page4 from "../../Components/Page4";

class MoviesID extends Component {
  state = {
    movieId: "",
    movieCast: [],
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const program = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1c85937fc01fe906f79ef42bea0d1b0b`
      );
      const gaming = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1c85937fc01fe906f79ef42bea0d1b0b`
      );

      this.setState({
        movieId: program.data,
        movieCast: gaming.data.cast,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // back home
  onBackToHome = () => {
    this.props.history.push("/");
  };
  render() {
    const { movieId, movieCast } = this.state;
    return (
      <div>
        <Page1 movieId={movieId} />
        <Page2 movieId={movieId} />
        <Page3 movieId={movieId} />
        <Page4 movieCast={movieCast} />
      </div>
    );
  }
}
export default withRouter(MoviesID);
