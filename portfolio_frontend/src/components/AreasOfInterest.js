// src/components/AreasOfInterest.js

import React from 'react';
import './AreasOfInterest.css';

const AreasOfInterest = () => {
    return (
        <section id="areas-of-interest">
            <div className="container">
                <h2>Areas of Interest</h2>
                <div className="interests">
                    <div className="interest">
                        <span className="emoji">📊</span>
                        <span>Data Structures and Algorithms</span>
                    </div>
                    <div className="interest">
                        <span className="emoji">💻</span>
                        <span>Operating Systems</span>
                    </div>
                    <div className="interest">
                        <span className="emoji">🤖</span>
                        <span>Machine Learning</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreasOfInterest;
