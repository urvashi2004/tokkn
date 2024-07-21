import React from 'react';
import HoverCard from './Hover';
import './Home.css';
import Intro from './Intro.png';

const Home = () => {
    return (
        <div className="home-page">

            <img src={Intro} alt='Landing Page' />

            <div className="title">
                <h1>Benefits of using our Tokkns</h1>
            </div>

            <div className="cards">

                <div className="card-main">
                    <HoverCard name="Reduced Overspending" 
                    details="Curb impulsive spending by imposing limits or requiring additional steps :P"/>
                </div>

                <div className="card-main">
                    <HoverCard name="Let Us Adapt Your Budget"
                    details="Adapt your budget so that your pockets don't get empty so soon!"/>
                </div>

                <div className="card-main">
                    <HoverCard name="Setting Financial Goals"
                    details="Let us help you allocate these tokens to your goals and then enjoy them in peace"/>
                </div>

                <div className="card-main">
                    <HoverCard name="Rewards Users In Real Time"
                    details="Get rewarded on spending your money, or maybe helping in living :)"/>
                </div>

            </div>
        </div>
    );
};

export default Home;