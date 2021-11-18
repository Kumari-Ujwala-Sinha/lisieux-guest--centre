import React from 'react'
import './servicefeature.css'
function Servicefeature() {
    const arr=[
        {
            row__reverse:"servicefeature__wrapper",
            image:"/assets/service.webp"
        },
        {
            row__reverse:"servicefeature__wrapper row__reverse",
            image:"/assets/service2.webp"
        }
    ]
    return (
        <div className="servicefeature">
            {arr.map((val)=>{
                return(
                    <div className={val.row__reverse}>
                <div className="servicefeature__left">
                    <img src={val.image} alt=""/>
                </div>
                <div className="servicefeature__right">
                    <div className="servicefeature__right__inner">
                        
                        <div className="servicefeature__details">
                            <img src="/assets/tick.png" alt=""/>
                            <div className="servicefeature__detail">
                                <h1>Luxury Rooms</h1>
                                <p>Even the all-powerful Pointing has no control about the blinds texts.</p>
                            </div>
                        </div>
                        <div className="servicefeature__details">
                            <img src="/assets/tick.png" alt=""/>
                            <div className="servicefeature__detail">
                                <h1>Fast & Free Wifi</h1>
                                <p>Even the all-powerful Pointing has no control about the blinds texts.</p>
                            </div>
                        </div>
                        <div className="servicefeature__details">
                            <img src="/assets/tick.png" alt=""/>
                            <div className="servicefeature__detail">
                                <h1>Travel Accomodation</h1>
                                <p>Even the all-powerful Pointing has no control about the blinds texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
            
        </div>
    )
}

export default Servicefeature
