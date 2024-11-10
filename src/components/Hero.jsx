import React from "react";
import styled from "styled-components"; // Ensure you have styled-components installed
import hero1 from '../assets/hero1.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
    <Section>
      <img src={hero1} alt="Delicious Food" />
      <Overlay>
        <Text>Welcome to our restaurant, enjoy delicious and tasty food!</Text>
      </Overlay>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  position: relative; // Position relative to contain absolutely positioned children
  width: 100%;
  img {
    width: 100%; // Ensures the image takes up 100% width of the section
    height: 700 px; // Maintains the aspect ratio of the image
  }
`;

const Overlay = styled.div`
  position: absolute; // Positioning overlay over the image
  top: 50%; // Center vertically
  left: 50%; // Center horizontally
  transform: translate(-50%, -50%); // Adjust to center
  color: white; // Text color
  text-align: center; // Center text
  font-size: 0.8rem; // Adjust font size as needed
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); // Optional: add text shadow for better visibility
`;

const Text = styled.h1`
  margin: 0; // Remove default margin
`;

export default Hero;
