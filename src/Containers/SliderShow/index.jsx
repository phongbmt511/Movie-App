import React, { Component } from "react";
import Slider from "react-slick";
import "./SliderShow.css";
export default class SliderShow extends Component {
  render() {
    const { moveBy } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          {moveBy.map((Items) => {
            const { backdrop_path, original_title, overview } = Items;
            return (
              <div className="Slider_Item">
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt="/"
                />
                <div className="Slider_title">
                  <div className="Slider_title-text">
                    <h1>{original_title}</h1>
                    <p>{overview}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}



