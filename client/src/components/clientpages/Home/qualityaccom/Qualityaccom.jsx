import React from 'react';
import './qualityaccom.css';
function Qualityaccom() {
    return (
        <div className="qualityaccom">
            <div className="qualityaccom__backimg">
                <img className='w-full h-full bg-cover bg-center object-cover object-center bg-no-repeat' src="https://roohome.com/wp-content/uploads/2016/08/PLASTER-LINA.jpg" alt="qual"/>
                <div className="qualityaccom__inner__content">
                     <div className="qualityaccom__desc">Quality accomadation that exceeds the expectations</div>
                     <button className="qualityaccom__btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Qualityaccom
