import React from "react";
import CheckForm from "./HomeComponents/CheckForm";
import Slider from "./HomeComponents/Slider";
import Facilities from "./facilities/Facilities";
import Featured from "./feature/Featured";
import Review from './review/Review';
import Food from "./food/Food";
import Qualityaccom from "./qualityaccom/Qualityaccom";

const Home = () => {
  return (
    <div className="mt-0 md:-mt-28">
      <Slider />
      <CheckForm />
      <Facilities/>
      <Featured/>
      <Food/>
      <Qualityaccom/>
      <Review/>
    </div>
  );
};

export default Home;
