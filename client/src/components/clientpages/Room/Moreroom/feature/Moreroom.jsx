import React from 'react';
import './moreroom.css';
function Moreroom() {
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
        <div className="moreroom">
             <div className="moreroom__wrapper">
                <h1 className="moreroom__wrapper__head">More Rooms</h1>
                <p className="moreroom__wrapper__desc">A briefin an expert to individug is a communication by an expert to individuals who need to learn from the expert. A meeting, on the other hand, often involves an exchange of information. Corporate departments have meetings in which everyone sitting around the table contributes an idea.
ed not that a meeting never involves .
                </p>
                <div className="moreroom__features">
                    
                    {arr.map((val)=>{
                        return(
                            <div className="moreroom__feature">
                        <div className="moreroom__feature__img">
                            <img src={val.img} alt=""/>
                        </div>

                            <div className="moreroom__feature__details">
                                <h1>{val.title}</h1>
                                <p class="moreroom__dollar__sign"><sup>$</sup><span className="moreroom__feature__price">{val.price}</span><sub>/per night</sub></p>
                                <div className="moreroom__feature__detail">
                                    <span className="moreroom__feature__key">Adults:</span>
                                    <span className="moreroom__feature__value">{val.adults}</span>
                                </div>
                                <div className="moreroom__feature__detail">
                                    <span className="moreroom__feature__key">Categories:</span>
                                    <span className="moreroom__feature__value">{val.categories}</span>
                                </div>
                                <div className="moreroom__feature__detail">
                                    <span className="moreroom__feature__key">Facilities:</span>
                                    <span className="moreroom__feature__value">{val.facilities}</span>
                                </div>
                                <div className="moreroom__feature__detail">
                                    <span className="moreroom__feature__key">Size:</span>
                                    <span className="moreroom__feature__value">{val.size}<sup>{val.size_power}</sup></span>
                                </div>
                                <div className="moreroom__feature__detail">
                                    <span className="moreroom__feature__key">Bed Type:</span>
                                    <span className="moreroom__feature__value">{val.bedType}</span>
                                </div>                           

                            </div>
                    </div>
                        )
                    })}
                    
                    
                    
                    
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default Moreroom