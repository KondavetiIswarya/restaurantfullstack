import React from 'react';
import about from '../assets/about.jpg';   // Corrected relative path
import maincover from '../assets/maincover.jpg';  // Corrected relative path
import './About.css';  // Make sure the CSS is imported

const About = () => {
  return (
    <div className="about-container">
      {/* Left section for images */}
      <div className="about-left">
        <img src={about} alt="Left Image" className="about-image" />
      </div>

      {/* Center section for history */}
      <div className="about-center">
        <h2>Our History</h2>
        <p>
          Welcome to our restaurant! Established in 2000, we have been serving authentic 
          and delicious meals for over 24 years. Our passion for food is reflected in the 
          quality of our dishes and the warm ambiance we offer to our guests. Whether you are 
          here for a casual meal or a special occasion, our rich history is present in every dish.
        </p>
      </div>

      {/* Right section for images */}
      <div className="about-right">
        <img src={maincover} alt="Right Image" className="about-image" />
      </div>
    </div>
  );
};

export default About;
