import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css'; // Import your CSS file
import image from './Account.png'

const Account = () => {
  return (
    <div className="profile-container">
      <div className='Left-nav'>
      <img src= {image}  alt = "userprofile" className="profile" />
      <h2 className="username">John Doe</h2>
      <button class="btn"> See Resume </button>          
      <div className="profile-info"> 
        <p className="earned-tokens">Earned Tokens: 100</p>
      </div>
      </div>
      <div className="button-container">
        <Link to="/login" className="logo">
          <button className="entry-button">Log In</button>
        </Link>
        <Link to="/signin" className="logo">
          <button className="entry-button">Sign In</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Account;
