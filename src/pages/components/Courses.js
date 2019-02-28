import '../../index.scss';
import Slider from "react-slick";
import React, { Component } from "react";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2>Приклади освітніх подій</h2>
        <Slider {...settings}>
          <div className="courses__card"></div>
          <div className="courses__card"></div>
          <div className="courses__card"></div>
        </Slider>
      </div>
    );
  }
}