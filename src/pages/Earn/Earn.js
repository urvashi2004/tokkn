import React from 'react';
import './Earn.css'; // Assuming your stylesheet is named Earn.css
import Coffee from "./coffee.png";
import Airline from "./airline.png";
import Shopping from "./shopping.png"; 

function Tokens() {
  const projects = [
    {
      title: 'Coffee Coin',
      image: Coffee,
      description: 'Users earn Coffee Coins for every purchase: 1 Coffee Coin per $1 spent. Use Coffee Coins for discounts on drinks and food items.',
      className: 'align',
    },
    {
      title: 'SkyMiles Tokens',
      image: Airline,
      description: 'Earn SkyMiles Tokens for every flight booked: Amount based on flight distance and class. Use SkyMiles Tokens for flight upgrades, seat selection, or excess baggage allowance',
      className: 'side',
    },
    {
      title: 'ShopPoints',
      image: Shopping, 
      description: 'Earn ShopPoints for every purchase: Percentage based on total order value. Use ShopPoints for discounts on future purchases.',
      className: 'align spotify',
    },
  ];

  return (
    <div className="myProjects" id="projects">
      <div className="container">
        <h1 className="my">How to get Rewarded</h1>
        <div className="workList">
          {projects.map((project) => (
            <div className={`work ${project.className}`} key={project.title}>
              <img src={project.image} alt="" height="300px" />
              <div className="layer">
                <h3 className={project.className}>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tokens;
