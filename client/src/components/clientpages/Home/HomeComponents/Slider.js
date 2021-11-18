import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../home.css";

const Slider = () => {
  const arr=[
    {
      title:"Simple & Elegant",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/images/simpleandelegant.webp)"
    },
    {
      title:"Food & Drinks",
      img:"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/images/foodanddrink.webp)"
    },
    {
      title:`Enjoy A Serene Expericence`,
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
            <p className="slider__text1">Welcome</p>
            <h2 className="slider__text2">
              {val.title}
            </h2>
            <Link
              to="/blog"
              className="slider__btn"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      )
    })}
      

      
    </Carousel>
  );
};

export default Slider;
