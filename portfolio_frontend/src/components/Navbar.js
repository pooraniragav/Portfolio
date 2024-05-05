// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Portfolio
                </Link>
                {/* Hamburger menu icon for mobile */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {/* Navlinks for desktop */}
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/areasOfInterest" className="nav-links" onClick={toggleMenu}>Areas Of Interest</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experience" className="nav-links" onClick={toggleMenu}>Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-links" onClick={toggleMenu}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/certificates" className="nav-links" onClick={toggleMenu}>Certificates</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={toggleMenu}>Projects</Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
