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
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators"></div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval={10000}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block text-white">
                      <h1>{original_title}</h1>
                      <p>{overview}</p>
                    </div>
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
