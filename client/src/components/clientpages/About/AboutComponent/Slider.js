import React from "react";
// import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../about.css";

const Slider = () => {
  const arr=[
    {
      title:"The Hotel",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/images/rooms.webp)"
    },
    {
      title:"Rooms & suites 2",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/images/rooms.webp)"
    }
  ]
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={2500}
      stopOnHover={false}
    >
      {arr.map((val)=>{
      return(
        <div
        className="header__images"
        style={{
          background: `${val.img}`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="sliderContainer">
          <div className="sliderText">
            <p className="slider__text1">ABOUT</p>
            <h1 className="slider__text2">{val.title}</h1>
          </div>
        </div>
      </div>
      )})}
      
    </Carousel>
  );
};

export default Slider;
