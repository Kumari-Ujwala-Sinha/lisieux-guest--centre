import React from 'react'
import Slider from './AboutComponent/Slider'
import Experience from './experience/Experience'
import Team from './team/Team'
import Facilities from '../Home/facilities/Facilities'
function About() {
    return (
        <div className="mt-0 md:-mt-28">
            <Slider/>
            <Experience/>
            <Team/>
            <Facilities/>
        </div>
    )
}

export default About
