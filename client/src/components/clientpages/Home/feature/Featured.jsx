import React from "react";
import "./feature.css";
function Featured() {
  const arr=[
    {
      img:"/assets/bachelor.webp",
      title:"Bachelor Room",
      price:"156",
      adults:"1",
      categories:"Single",
      facilities:" Closet with hangers, HD flat-screen TV, Telephone",
      size:"20m",
      size_power:"2",
      bedType:"One bed"
    },
    {
      img:"/assets/family.webp",
      title:"Family Room",
      price:"320",
      adults:"1",
      categories:"Single",
      facilities:" Closet with hangers, HD flat-screen TV, Telephone",
      size:"20m",
      size_power:"2",
      bedType:"One bed"
    },
    {
      img:"/assets/presedential.webp",
      title:"Presedential Room",
      price:"425",
      adults:"1",
      categories:"Single",
      facilities:" Closet with hangers, HD flat-screen TV, Telephone",
      size:"20m",
      size_power:"2",
      bedType:"One bed"
    }
  ]
  return (
    <div className="featured">
      <div className="room__wrapper">
        <p className="room__wrapper__para">
          FEATURED ROOMS <span className="room__para__line"></span>
        </p>
        <h1 className="room__wrapper__head">Rooms & Suites</h1>
        <p className="room__wrapper__desc">
          A briefing is a communication by an expert to individuals who need to
          learn from the expert. A meeting, on the other hand, often involves an
          exchange of information. Corporate departments have meetings in which
          everyone sitting around the table contributes an idea. In my
          neighborhood, we’ve had some meetings lately in which residents talked
          with each other about their needs as users of our transit systems.
          It’s not that a meeting never involves A briefing is a communication
          by an expert to individuIt’s not that a meeting never involves
        </p>
        <div className="room__features">
        {arr.map((val)=>{
          return(
            <div className="room__feature">
            <div className="room__feature__img">
              <img src={val.img} alt="" />
            </div>

            <div className="room__feature__details">
              <h1>{val.title}</h1>
              <p class="room__dollar__sign">
                <sup>$</sup>
                <span className="room__feature__price">{val.price}</span>
                <sub>/per night</sub>
              </p>
              <div className="room__feature__detail">
                <span className="room__feature__key">Adults:</span>
                <span className="room__feature__value">{val.adults}</span>
              </div>
              <div className="room__feature__detail">
                <span className="room__feature__key">Categories:</span>
                <span className="room__feature__value">{val.categories}</span>
              </div>
              <div className="room__feature__detail">
                <span className="room__feature__key">Facilities:</span>
                <span className="room__feature__value">
                 {val.facilities}
                </span>
              </div>
              <div className="room__feature__detail">
                <span className="room__feature__key">Size:</span>
                <span className="room__feature__value">
                  {val.size}<sup>{val.size_power}</sup>
                </span>
              </div>
              <div className="room__feature__detail">
                <span className="room__feature__key">Bed Type:</span>
                <span className="room__feature__value">{val.bedType}</span>
              </div>
            </div>
          </div>
          )
        })
          
          }
          
        </div>
      </div>
    </div>
  );
}

export default Featured;
