import React from 'react';
import styled from 'styled-components';
import Pizza from '../assets/Pizza.png';
import rest1 from '../assets/rest1.jpeg';
import rest2 from '../assets/rest2.jpeg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function SectionLayout() {
  return (
    <SectionContainer>
      <div className="left-content">
        <img src={Pizza} alt="Pizza" />
      </div>
      <div className="center-content">
        <h2>Why we??</h2>
        <p>
          Welcome to our restaurant, where we serve the finest dishes made from fresh ingredients. 
          Our passion for food is evident in every bite.
        </p>
      </div>
      <div className="right-content">
        <Carousel interval={3000}> {/* Autoplay every 3 seconds */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={rest1}
              alt="First restaurant slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={rest2}
              alt="Second restaurant slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .left-content {
    flex: 1;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  
  .center-content {
    flex: 2;
    padding: 0 20px;
    text-align: center;

    h2 {
      margin-bottom: 10px;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
  
  .right-content {
    flex: 1;
    
    .carousel {
      max-width: 100%;
      height: auto;
    }
    
    .carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    img {
      object-fit: cover;
      height: 300px; /* Set a fixed height for the carousel images */
      width: 100%; /* Ensure image covers the width */
    }
  }
`;
