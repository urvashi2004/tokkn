import React from 'react';
import './About.css';

import Deepanjali from './Deepanjali.jpg';
import Gupta from './Gupta.jpg';
import Tejan from './Tejan.jpg';
import Urvashi from './Urvashi.jpg';


import LinkedIn from './LinkedIn.png';

const About = () => {
    return (
        <section className="cores">
                <p>Our Team</p>

                <div className="cores-photo">
                    
                    <div className="photo">
                        <img src={Deepanjali} alt="Avatar" className="image" />
                        <div className="overlay">
                            <p>Deepanjali Kumari</p>
                            <a href="https://www.linkedin.com/in/deepanjali-kumari-835204289/" className="icons">
                                <img src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="photo">
                        <img src={Gupta} alt="Avatar" className="image" />
                        <div className="overlay">
                            <p>Shreya Gupta</p>
                            <a href="https://www.linkedin.com/in/shreya-gupta-a783b9270/" className="icons">
                            <img src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className="photo">
                        <img src={Tejan} alt="Avatar" className="image" />
                        <div className="overlay">
                            <p>Shreya Tejan</p>
                            <a href="https://www.linkedin.com/in/shreya-tejan/" className="icons">
                            <img src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className="photo">
                        <img src={Urvashi} alt="Avatar" className="image" />
                        <div className="overlay">
                            <p>Urvashi Yadav</p>
                            <a href="https://www.linkedin.com/in/urvashiyadav2004/" className="icons">
                            <img src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
    );
};

export default About;