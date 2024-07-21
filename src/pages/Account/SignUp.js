import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css'; // Import your CSS file
import image from './Account.png'

const SignUp = () => {
  return (
    <div className="profile-container">
      <div className='home'>
      <div className='left-nav'>
      <img src= {image}  alt = "userprofile" className="profile" />
      <h2 className="username">John Doe</h2>
      <button className="btn">Deals for You</button>
      </div>
      <div className='right-nav'>  
        <p className="earned-tokens">Earned Tokens: 100</p>
      </div>
      
      </div>

      <div className="button-container">
        <Link to="/login" className="logo">
          <button className="entry-button btn">Sign In</button>
        </Link>
        <Link to="/signin" className="logo">
          <button className="entry-button btn">Log Out</button>
        </Link>
        
      </div>
    </div>
  );
};

export default SignUp;
