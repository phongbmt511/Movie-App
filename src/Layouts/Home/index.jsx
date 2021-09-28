import axios from "axios";
import React, { Component } from "react";
import MovieMore from "../../Components/MovieMore";
import MovieItem from "../../Components/MovieItem";
import SliderShow from "../../Containers/SliderShow";
import SearchUser from "../../Components/SearchUser";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      moveBy: [],
      page: 1,
      more: false,
    };
  }
  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  onSubmitSearchUser = (e) => {
    e.preventDefault();
    this.onFetchUser(this.state.search);
  };
  async componentDidMount() {
    try {
      const repro = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1c85937fc01fe906f79ef42bea0d1b0b`
      );

      this.setState({
        moveBy: repro.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }
  onFetchUser = async () => {
    let search = this.state.search;
    try {
      const responsive = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1c85937fc01fe906f79ef42bea0d1b0b`
      );
      let more = true;
      if (responsive.length < 20) more = false;
      this.setState({
        moveBy: responsive.data.results,
        page: 1,
        more,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //loading more
  handleMore = async () => {
    let search = this.state.search;
    let { moveBy, page } = this.state;
    page = page + 1;
    console.log("abc");
    try {
      let MoviePage = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1c85937fc01fe906f79ef42bea0d1b0b&page=${page}`
        )
        .then((responsive) => responsive.data.results);

      let more = true;
      if (MoviePage.length < 20) more = false;
      this.setState(
        {
          moveBy: moveBy.concat(MoviePage),
          page: 1,
          more,
        },
        () => console.log(this.state)
      );
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { moveBy } = this.state;
    return (
      <div>
        <SliderShow moveBy={moveBy} />
        <SearchUser
          onFetchUser={this.onFetchUser}
          onSearchChange={this.onSearchChange}
          onSubmitSearchUser={this.onSubmitSearchUser}
          search={this.state.search}
        />
        <MovieItem moveBy={moveBy} />
        {this.state.more && <MovieMore handleMore={this.handleMore} />}
      </div>
    );
  }
}