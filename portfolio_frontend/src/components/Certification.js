// src/components/Certification.js

import React, { useState } from 'react';
import './Certification.css';

const Certification = () => {
    const [expanded, setExpanded] = useState([]);

    const toggleExpand = (index) => {
        setExpanded((prevExpanded) =>
            prevExpanded.includes(index)
                ? prevExpanded.filter((item) => item !== index)
                : [...prevExpanded, index]
        );
    };

    return (
        <section id="certification">
            <div className="container">
                <h2>Certifications</h2>
                <div className="certification-list">
                    <div className="certification-item" onClick={() => toggleExpand(0)}>
                        <h3>AWS Certified Cloud Practitioner</h3>
                    </div>
                    {expanded.includes(0) && (
                        <div className="certification-details">
                            <p>Issued by AWS<br/>
                            Expires by Jan 19 2026</p>
                        </div>
                    )}
                    <div className="certification-item" onClick={() => toggleExpand(1)}>
                        <h3>Quadient Certified CCM Developer</h3>
                    </div>
                    {expanded.includes(1) && (
                        <div className="certification-details">
                            <ul>
                                <li>Quadient Inspire Designer - Basic</li>
                                <li>Quadient Inspire Interactive - Basic</li>
                                <li>Quadient Inspire Content Manager - Basic</li>
                                <li>Quadient Inspire Dynamic Communication - Basic</li>
                                <li>Quadient Inspire Scaler - Basic</li>
                                <li>Quadient Inspire Scaler - Advanced</li>
                            </ul>
                            <p>Issued by Quadient - CCM Software and Tools</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Certification;
