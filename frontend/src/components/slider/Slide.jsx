import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";
const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} className="slider">
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
