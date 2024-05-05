import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import AreasOfInterest from './components/AreasOfInterest';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Projects from './components/Projects';
import './App.css'; // Import CSS file for global styles


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Define routes for other components */}
                <Route path="/" element={<div>
                  <About/>
                  <AreasOfInterest/>
                  <Experience />
                  <Skills/>
                  <Certification />
                  <Projects />
                </div>} />
                <Route path="/areasOfInterest" element={<AreasOfInterest/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/certificates" element={<Certification/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </Router>
    );
}

export default App;


