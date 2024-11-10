import React from "react";
import styled from "styled-components";
import im1 from "../assets/im1.jpg"; 
import im2 from "../assets/im2.jpeg"; 
import im3 from "../assets/im3.jpeg";

export default function Signature() {
  return (
    <DishesSection id="signature-dishes">
      <h1>Signature Dishes</h1>
      <div className="dishes-container">
        <div className="dish">
          <img src={im1} alt="Signature Dish 1" />
          <h2>Mexican Salad</h2>
        </div>
        <div className="dish">
          <img src={im2} alt="Signature Dish 2" />
          <h2>Hyderabadi biryani</h2>
        </div>
        <div className="dish">
          <img src={im3} alt="Signature Dish 3" />
          <h2>Strawberry Pudding</h2>
        </div>
      </div>
    </DishesSection>
  );
}

const DishesSection = styled.section`
  padding: 3rem;
  text-align: center;
  
  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .dishes-container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .dish {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0; /* Start hidden for animation */
      transform: translateY(50px); /* Start from lower position */
      animation: slideUp 1s ease forwards; /* Slide up effect */

      img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
        transition: transform 0.3s ease-in-out; /* Image zoom effect */
      }

      h2 {
        margin-top: 1rem;
        font-size: 1.5rem;
        color: #333;
      }

      &:hover img {
        transform: scale(1.1); /* Zoom in on hover */
      }
    }

    /* Animation to slide the images in */
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Delay each image animation slightly for a staggered effect */
    .dish:nth-child(1) {
      animation-delay: 0.1s;
    }
    .dish:nth-child(2) {
      animation-delay: 0.3s;
    }
    .dish:nth-child(3) {
      animation-delay: 0.5s;
    }
  }

  @media (max-width: 768px) {
    .dishes-container {
      flex-direction: column;
    }

    .dish {
      margin-bottom: 2rem;
    }
  }
`;
