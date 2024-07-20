import React from 'react';
import HoverCard from './Hover';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="cards">

                <div className="card-main">
                    <HoverCard name="Trust and peace of mind" 
                    details="Craft stunning, responsive websites
                    from scratchwith HTML, CSS, and JavaScript.
                    Dive deep into frameworks like React and
                    backend tech like Node.js!"/>
                </div>

                <div className="card-main">
                    <HoverCard name="Adapt your budget"
                    details="Build sleek mobile apps with Android
                    or iOS, and master cross-platform tools
                    like Flutter. Create, test, and optimize
                    your app for any device!"/>
                </div>

                <div className="card-main">
                    <HoverCard name="A new kind of employee"
                    details="Step into the future with AR/VR!
                    Create immersive 3D worlds using Unity
                    or Unreal Engine, and script interactive
                    experiences with ease."/>
                </div>

                <div className="card-main">
                    <HoverCard name="Rewards users in real time"
                    details="Step into the future with AR/VR!
                    Create immersive 3D worlds using Unity
                    or Unreal Engine, and script interactive
                    experiences with ease."/>
                </div>
                
            </div>
        </div>
    );
};

export default Home;