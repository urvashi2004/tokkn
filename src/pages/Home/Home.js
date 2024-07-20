import React from 'react';
import HoverCard from './Hover';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <div className="cards">

                <div className="card-main">
                    <HoverCard name="Trust and peace of mind" 
                    details="Hello"/>
                </div>

                <div className="card-main">
                    <HoverCard name="Let us adapt your budget"
                    details="Hello2"/>
                </div>

                <div className="card-main">
                    <HoverCard name="A new kind of employee"
                    details="Hello3"/>
                </div>

                <div className="card-main">
                    <HoverCard name="Rewards users in real time"
                    details="Hello4"/>
                </div>

            </div>
        </div>
    );
};

export default Home;