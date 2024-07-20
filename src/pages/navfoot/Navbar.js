import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="menu-btn" onClick={toggleNavbar}>
                ☰
            </button>
            <div className={`navbar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleNavbar}>
                    &times;
                </button>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;