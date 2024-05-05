// src/components/Experience.js

import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [expanded, setExpanded] = useState([]);

    const toggleExpand = (index) => {
        setExpanded((prevExpanded) =>
            prevExpanded.includes(index)
                ? prevExpanded.filter((item) => item !== index)
                : [...prevExpanded, index]
        );
    };

    return (
        <section id="experience">
            <div className="container">
                <h2>Experience</h2>
                <div className="experience-list">
                    <div className="experience-item" onClick={() => toggleExpand(0)}>
                        <div className="company-designation">Associate (Python Developer) @ Cognizant</div>
                        {expanded.includes(0) && (
                            <ul className="responsibilities">
                                <li>Collaborated with a team of six developers to design and implement web applications 
                                    using Python Flask and Django framework.</li>
                                <li>Developed and maintained RESTful APIs, implemented data models, 
                                    database migrations and ORM functionality to enhance application.</li>
                                <li>Conducted thorough unit testing in test driven development (TDD), optimised performance
                                     by code refactoring to deliver high-quality and error-free products.</li>
                            </ul>
                        )}
                    </div>
                    <div className="experience-item" onClick={() => toggleExpand(1)}>
                        <div className="company-designation">Programmer Analyst @ Cognizant</div>
                        {expanded.includes(1) && (
                            <ul className="responsibilities">
                                <li>Designed Customer Communication Management (CCM) solutions using 
                                    Quadient Inspire Designer.</li>
                                <li>Collaborated with business analysts to understand client 
                                    requirements and implemented customized solutions.</li>
                                <li>Designed and formatted interactive and 
                                    personalized customer communications.</li>
                                <li>Conducted testing and troubleshooting to ensure accurate and 
                                    timely delivery of communications.</li>
                            </ul>
                        )}
                    </div>
                    <div className="experience-item" onClick={() => toggleExpand(2)}>
                        <div className="company-designation">Programmer Analyst Trainee @ Cognizant</div>
                        {expanded.includes(2) && (
                            <ul className="responsibilities">
                                <li>Completed 6 months training from SMEs on Java and Python full-stack 
                                    development and built a web application using Java, Spring Boot and Python.</li>
                                <li>Acquired hands-on experience in full-stack development, 
                                    covering both front-end and back-end components.</li>
                                <li>Demonstrated effective communication, and problem-solving 
                                    skills in a project-based learning environment.</li>
                            </ul>
                        )}
                    </div>
                    {/* Add more experience items as needed */}
                </div>
            </div>
        </section>
    );
};

export default Experience;
