import React from 'react'
import Slider from "./RoomComponents/Slider";
import './Room';
import Roompricing from './roompricing/Roompricing';
import Moreroom from './Moreroom/feature/Moreroom';
import './room.css'
function Room() {
    return (
        <div className="mt-0 md:-mt-28">
            <Slider/>
            <Roompricing/>
            <Moreroom/>
            <div className="promos">
                <div className="promos__wrapper">
                    <h1>Be Sure To Get Our Promos</h1>
                    <div className="promos__input">
                        <input type="text" placeholder="Enter your email"/>
                        <button type="button">SUBSCRIBE</button>
                    </div>
                </div>          
                
            </div>
        </div>
    )
}

export default Room
