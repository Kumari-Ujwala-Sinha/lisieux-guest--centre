import React from 'react';
import './review.css';
function Review() {
    const arr=[
        {   img:"/assets/person6.jpg",
            title:"Martin Newmansfield",
            opinion:"Satisfied Customer",
            desc:`"The best publicity is, well, public. Tap into your most public-facing resource by engaging with customers on social media platforms. Reply to positive service reviews. I’ll be honest. One of the most satisfying parts of working in customer service is turning an angry customer into a happy one. Quantify reviews onsite and off. "`
        },
        {   img:"/assets/person7.jpg",
            title:"Martin Newmansfield",
            opinion:"Satisfied Customer",
            desc:`"The best publicity is, well, public. Tap into your most public-facing resource by engaging with customers on social media platforms. Reply to positive service reviews. I’ll be honest. One of the most satisfying parts of working in customer service is turning an angry customer into a happy one. Quantify reviews onsite and off. "`
        },
        {   img:"/assets/person8.jpg",
            title:"Martin Newmansfield",
            opinion:"Satisfied Customer",
            desc:`"The best publicity is, well, public. Tap into your most public-facing resource by engaging with customers on social media platforms. Reply to positive service reviews. I’ll be honest. One of the most satisfying parts of working in customer service is turning an angry customer into a happy one. Quantify reviews onsite and off. "`
        }

    ]
    return (
        <div className="review">
            <div className="review__wrapper">
                <p className="review__wrapper__para">REVIEWS <span className="review__para__line"></span></p>
                <h1 className="review__wrapper__head">Guest Reviews</h1>
                <div className="review__features">
                {arr.map((val)=>{
                    return(
                        <div className="review__feature">
                        <div className="review__feature__inner">
                            <div className="review__feature__img">
                                <img src={val.img} alt=""/>
                            </div>
                            <div className="review__feature__info">
                                <h1>{val.title}</h1>
                                <p>{val.opinion}</p>
                            </div>
                        </div>
                        <div className="review__desc">
                            {val.desc}
                        </div>
                    </div>  
                    )
                })}
                            
                </div>
                
            </div>
        </div>
    )
}

export default Review
