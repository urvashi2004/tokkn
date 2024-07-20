import React from 'react';
import './About.css';
import home from "./image.png"

const About = () => {
    return (
        <div className="about-us">  
          <div className="about">
            <div className="left">

            </div>
            <div className="right">
                <img src = {home} alt = "About-image" className='image'/>
            </div>
           </div> 
        </div>
    );
};

export default About;