// src/components/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-list">
                    <div className="skill-category">
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>React.js</li>
                            <li>Java</li>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Frameworks</h3>
                        <ul>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>FastAPI</li>
                            <li>Spring Boot</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Tools/Software</h3>
                        <ul>
                            <li>Git</li>
                            <li>Visual Studio Code</li>
                            <li>Postman</li>
                            <li>Quadient Inspire</li>
                            <li>Jira</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Database</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>SQLite</li>
                            <li>PostgreSQL</li>
                            <li>Mongo DB</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Cloud & Other Tech</h3>
                        <ul>
                            <li>AWS</li>
                            <li>RESTful APIs</li>
                            <li>Jinja2</li>
                            <li>ORM</li>
                            <li>Pandas</li>
                            <li>NumPy</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Soft Skills</h3>
                        <ul>
                            <li>Communication</li>
                            <li>Teamwork</li>
                            <li>Problem-solving</li>
                            <li>Time management</li>
                            <li>Adaptability</li>
                        </ul>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Skills;
