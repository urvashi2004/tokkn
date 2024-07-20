import React from 'react';
import './Account.css'; // Import your CSS file
import image from './Account.png'

const Account = () => {
  return (
    <div className="profile-container">
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
    </div>
  );
};

export default Account;
