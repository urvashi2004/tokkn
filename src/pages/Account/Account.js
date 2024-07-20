import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css'; // Import your CSS file
import image from './Account.png'

const Account = () => {
  return (
    <div className="profile-container">
      <h1> My Wallet </h1>
      <img src= {image}  alt = "userprofile" className="profile" />
      <div className="profile-info">
        <h2 className="username">John Doe</h2>
        <p className="earned-tokens">Earned Tokens: 100</p>
      </div>
      <div className="button-container">
        <button className="history-button">History</button>
        <button className="settings-button">Settings</button>
        <button className="token-button">Earn Tokens</button>
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
