import React from 'react';
import './food.css';
function Food() {
    const arr=[
        {
            title:"Egg & Asparagus",
            desc:"A briefing is a communication by an expert to individuals who need In my neighborhood, we’ve had some meetings",
            img:"/assets/food1.webp",
            price:"30.50"
        },
        {
            title:"Grilled Top Sirloin Steak",
            desc:"A briefing is a communication by an expert to individuals who need In my neighborhood, we’ve had some meetings",
            img:"/assets/food2.webp",
            price:"425"
        },
        {
            title:"Egg & Asparagus",
            desc:"A briefing is a communication by an expert to individuals who need In my neighborhood, we’ve had some meetings",
            img:"/assets/food3.webp",
            price:"425"
        }
    ]
    return (
        <div className="food">
             <div className="food__wrapper">
                <p className="food__wrapper__para">MENUS<span className="food__para__line"></span></p>
                <h1 className="food__wrapper__head">Restaurant Menu</h1>
                <div className="food__wrapper__desc">
                    <div className="foodvariety1">BREAKFAST</div>
                    <div className="foodvariety2">LUNCH</div>
                    <div className="foodvariety3">DINNER</div>
                </div>
                <div className="food__features">
                {arr.map((val)=>{
                    return(
                        <div className="food__feature">
                        <div className="food__feature__img">
                            <img src={val.img} alt=""/>
                        </div>

                        <div className="food__feature__details">
                                <h1>{val.title}</h1>
                                <div className="food__feature__detail">
                                   {val.desc}
                                </div>
                                <p class="food__dollar__sign"><sup>$</sup><span className="food__feature__price">{val.price}</span></p>
                        </div>
                    </div>
                    )
                })}
                    
                </div>
                
            </div>
        </div>
    )
}

export default Food
