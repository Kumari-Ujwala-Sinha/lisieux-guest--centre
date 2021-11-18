import React from "react";
import "./blogoffer.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Blogoffer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="blogoffer">
      <div className="blogoffer__cards">
        <div className="blogoffer__card">
          <div className="blogoffer__img">
            <img src="/assets/offer1.webp" alt="offer1" />
          </div>
          <div className="blogoffer__content">
            <h1>Our New Presidential Room</h1>
            <h6>Posted on June 20,,2018 . byAdmin</h6>
            <p>
              Lorem ipsum dolo on raassdne cisadei kaeocda ksnfkseo sdjead
              sdldas osejvvv aslea
            </p>
            <Link to="">Read More...</Link>
          </div>
        </div>
        <div className="blogoffer__card">
          <div className="blogoffer__img">
            <img src="/assets/offer2.webp" alt="offer2" />
          </div>
          <div className="blogoffer__content">
            <h1>We Have A New Year Promo</h1>
            <h6>Posted on June 20,,2018 . byAdmin</h6>
            <p>
              Lorem ipsum dolo on raassdne cisadei kaeocda ksnfkseo sdjead
              sdldas osejvvv aslea
            </p>
            <Link to="">Read More...</Link>
          </div>
        </div>
        <div className="blogoffer__card">
          <div className="blogoffer__img">
            <img src="/assets/offer3.webp" alt="offer3" />
          </div>
          <div className="blogoffer__content">
            <h1>2018 New Year Promo</h1>
            <h6>Posted on June 20,,2018 . byAdmin</h6>
            <p>
              Lorem ipsum dolo on raassdne cisadei kaeocda ksnfkseo sdjead
              sdldas osejvvv aslea
            </p>
            <Link to="">Read More...</Link>
          </div>
        </div>
      </div>

      <div className="blogoffer__pages">
        <div>
          <Slider className="page__sliderContainer" {...settings}>
            <div className="page__padding">
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Blogoffer;
