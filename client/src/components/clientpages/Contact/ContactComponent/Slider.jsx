import React from "react";
// import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../Home/home.css";

const Slider = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={2500}
      stopOnHover={false}
    >
      <div
        className="header__images"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/images/rooms.webp)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sliderContainer">
          <div className="sliderText">
            <p className="slider__text1">CONTACT</p>
            <h1 className="slider__text2">Get In Touch</h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
