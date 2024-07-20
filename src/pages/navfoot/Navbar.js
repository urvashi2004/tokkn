import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar-container'>
            <button className="menu-icon" onClick={toggleNavbar}>
                {isOpen ? '×' : '☰'}
            </button>
            <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
                {isOpen ? (
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/tokens">Tokens</a></li>
                        <li><a href="/earn">Earn</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                ) : (
                    <div className="navbar-title">
                        <h1>Tokkn</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;