import React, { useState } from 'react';

function AccountSettings() {
  const [activeTab, setActiveTab] = useState('account-general');
  const tabs = [
    { name: 'General', id: 'account-general' },
    { name: 'Change password', id: 'account-change-password' },
    { name: 'Info', id: 'account-info' },
    { name: 'Social links', id: 'account-social-links' },
    { name: 'Connections', id: 'account-connections' },
    { name: 'Notifications', id: 'account-notifications' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const renderTabContent = (id) => {
    // Replace this with your content based on the id
    return (
      <div>
        Content for {id} goes here. 
      </div>
    );
  };

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4>Account settings</h4>
      <div className="card overflow-hidden">
        <ul className="nav nav-pills">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item">
              <a
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                href={`#${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
              id={tab.id}
            >
              {renderTabContent(tab.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;

