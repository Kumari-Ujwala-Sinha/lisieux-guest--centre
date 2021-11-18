import React from 'react';
import './roompricing.css';
function Roompricing() {
    const arr=[
        {
          img:"/assets/bachelor.webp",
          title:"Bachelor roompricing",
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
          title:"Family roompricing",
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
          title:"Presedential roompricing",
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

        <div className="roompricing">
             <div className="roompricing__wrapper">
                {/* <p className="roompricing__wrapper__para">FEATURED roompricingS <span className="roompricing__para__line"></span></p>
                <h1 className="roompricing__wrapper__head">roompricings & Suites</h1>
                <p className="roompricing__wrapper__desc">A briefing is a communication by an expert to individuals who need to learn from the expert. A meeting, on the other hand, often involves an exchange of information. Corporate departments have meetings in which everyone sitting around the table contributes an idea.
                 In my neighborhood, we’ve had some meetings lately in which residents talked with each other about their needs as users of our transit systems. It’s not that a meeting never involves 
                 A briefing is a communication by an expert to individuIt’s not that a meeting never involves 
                </p> */}
                <div className="roompricing__features">
                {arr.map((val)=>{
                    return(
                        <div className="roompricing__feature ">
                            <div className="roompricing__feature__img">
                                <img src={val.img} alt=""/>
                            </div>

                            <div className="roompricing__feature__details">
                                <h1>{val.title}</h1>
                                <p class="roompricing__dollar__sign"><sup>$</sup><span className="roompricing__feature__price">{val.price}</span><sub>/per night</sub></p>
                                <div className="roompricing__feature__detail">
                                    <span className="roompricing__feature__key">Adults:</span>
                                    <span className="roompricing__feature__value">{val.adults}</span>
                                </div>
                                <div className="roompricing__feature__detail">
                                    <span className="roompricing__feature__key">Categories:</span>
                                    <span className="roompricing__feature__value">{val.categories}</span>
                                </div>
                                <div className="roompricing__feature__detail">
                                    <span className="roompricing__feature__key">Facilities:</span>
                                    <span className="roompricing__feature__value">{val.facilities}</span>
                                </div>
                                <div className="roompricing__feature__detail">
                                    <span className="roompricing__feature__key">Size:</span>
                                    <span className="roompricing__feature__value">{val.size}<sup>{val.size_power}</sup></span>
                                </div>
                                <div className="roompricing__feature__detail">
                                    <span className="roompricing__feature__key">Bed Type:</span>
                                    <span className="roompricing__feature__value">{val.bedType}</span>
                                </div>   
                                <button className="roompricing__btn">READ MORE</button>                                                

                            </div>
                    </div>  
                    )
                })}
      
                </div>
                
            </div>
        </div>
    )
}

export default Roompricing
