import React from 'react';
import './facilities.css';
function Facilities() {
    const arr=[
        {
            img:"/assets/room.png",
            title:"Luxury Rooms",
            desc:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            img:"/assets/wifi.png",
            title:"Fast & Free Wifi",
            desc:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            img:"/assets/call.png",
            title:"Call Us 24/7",
            desc:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            img:"/assets/travel.png",
            title:"Travel Accomodation",
            desc:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            img:"/assets/credit.png",
            title:"Accept Credit Card",
            desc:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
        {
            img:"/assets/restaurant.png",
            title:"Restaurant",
            desc:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        },
    ]
    return (
        <div className="facility">
            <div className="facility__wrapper">
                <p className="facility__wrapper__para">SERVICES <span className="facility__para__line"></span></p>
                <h1 className="facility__wrapper__head">Facilities & Services</h1>
                <div className="facility__features">
                    {arr.map((val)=>{
                        return(
                            <div className="facility__feature">
                                <div className="facility__feature__img">
                                    <img src={val.img} alt=""/>
                                </div>
                                <div className="facility__feature__info">
                                    <h1>{val.title}</h1>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="facility__feature">
                        <div className="facility__feature__img">
                            <img src="/assets/wifi.png" alt=""/>
                        </div>
                        <div className="facility__feature__info">
                            <h1>Fast & Free Wifi</h1>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div>
                    <div className="facility__feature">
                        <div className="facility__feature__img">
                            <img src="/assets/call.png" alt=""/>
                        </div>
                        <div className="facility__feature__info">
                            <h1></h1>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div>
                    <div className="facility__feature">
                        <div className="facility__feature__img">
                            <img src="/assets/travel.png" alt=""/>
                        </div>
                        <div className="facility__feature__info">
                            <h1></h1>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div>
                    <div className="facility__feature">
                        <div className="facility__feature__img">
                            <img src="/assets/credit.png" alt=""/>
                        </div>
                        <div className="facility__feature__info">
                            <h1></h1>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div>
                    <div className="facility__feature">
                        <div className="facility__feature__img">
                            <img src="/assets/restaurant.png" alt=""/>
                        </div>
                        <div className="facility__feature__info">
                            <h1></h1>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div> */}
                </div>
                
            </div>
        </div>
    )
}

export default Facilities
