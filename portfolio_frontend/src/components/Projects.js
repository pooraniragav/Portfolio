// src/components/Projects.js

import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [expanded, setExpanded] = useState([]);

    const toggleExpand = (index) => {
        setExpanded((prevExpanded) =>
            prevExpanded.includes(index)
                ? prevExpanded.filter((item) => item !== index)
                : [...prevExpanded, index]
        );
    };

    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-list">
                    <div
                        className={`project-item ${expanded.includes(0) ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(0)}
                    >
                        <h3>SCALER WEB AUTOMATION</h3>
                        <p>Python process to identify high-priority issues in the application and 
                        automate report generation for critical issues. Reduced manual work by 30%.<br/><br/>
                        Analyzed critical data using Pandas, NumPy and presented it in a user-friendly format.
                        </p>
                    </div>
                    <div
                        className={`project-item ${expanded.includes(1) ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(1)}
                    >
                        <h3>LIFE CALCULATOR</h3>
                        <p>
                        Life Calculator is a website to calculate life insurance coverage with a 
                        user-friendly interface and Flask framework.<br/> <br/>
                        The site handles various input scenarios by adjusting variables, 
                        and observing impact on coverage recommendations and also securely stores financial data.
                        </p>
                    </div>
                    <div
                        className={`project-item ${expanded.includes(2) ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(2)}
                    >
                        <h3>E-FORMS WEB PORTAL</h3>
                        <p>
                        A Python-based e-forms portal for digital form processing resulting in 80% paperless transaction. 
                        Users effortlessly select forms from data storage and fill form data in the UI. <br/> <br/>
                        The captured information is populated into PDFs via Quadient Inspire. This site is integrated with 
                        mail and SMS servers, as well as an e-signature platform for swift digital signatures.
                        </p>
                    </div>
                    <div
                        className={`project-item ${expanded.includes(3) ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(3)}
                    >
                        <h3>E-COMMERCE WEBSITE</h3>
                        <p>
                        A fully functional ecommerce website using Java Spring Boot & Bootstrap. <br/> <br/>
                        Implemented user authentication and cart functionality to enhance the user experience 
                        and Integrated payment gateway for secure and seamless online transactions.
                        </p>
                    </div>
                    <div
                        className={`project-item ${expanded.includes(4) ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(4)}
                    >
                        <h3>PERSONAL PROJECTS</h3>
                        <p>
                        Simple blog and social media site with multiple users and comment feature 
                        using python Django framework backed by SQLite and PostgreSQL DB.<br/> <br/>
                        Simple games and applications using turtle, tkinter module in Python, applied 
                        web scraping using beautiful soup module. Developed a portfolio website with Python Flask. <br/> <br/>
                        Developed a client-side encryption software using Hybrid Cryptographic 
                        approach to reduce risk of sensitive data exposure in cloud using python framework.
                        </p>
                    </div>
                    {/* Add more project items as needed */}
                </div>
            </div>
        </section>
    );
};

export default Projects;
