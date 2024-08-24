import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left-section">
        <img src="./homepageimage.jpg
        " alt="Graduation cap" className="grad-cap" />
        <h1 className="title">TutorEase</h1>
        <div className="login-buttons">
          <Link to="/sign" className="login-button student">Login as a Student</Link>
          <Link to="/tutordashboard" className="login-button tutor">Login as a Tutor</Link>
        </div>
      </div>
      <div className="right-section">
        <div className="icons-container" >
          <img src=".\homepage.png" alt="Laptop" className="icon laptop" />
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;