// src/components/About.js

import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; // Replace 'profile-image.jpg' with your actual profile image file

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="profile-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
                <div className="text-container">
                    <h2>About Me</h2>
                    <div className="info">
                        <p className="name">Poorani Ragavan</p>
                        <p className="designation">Ex-Cognizant Associate</p>
                        <p className="location">Thanjavur</p>
                        <p className="qualification">B.Tech - Computer Science Engineering</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
