// src/components/Copyright.jsx
import React from "react";
import styled from "styled-components";

const CopyrightContainer = styled.div`
  margin: 0;
  text-align: center;
  background-color: White; /* Background for copyright section */
  color: black; /* Text color for copyright section */
  padding: 1rem; /* Padding for better visibility */

  .copyright-text {
    margin: 0; /* Remove default margin */

    span {
      color: #fc4958; /* Optional color for span */
      text-transform: uppercase;
    }
  }
`;

export default function Copyright() {
  return (
    <CopyrightContainer>
      <div className="copyright-text">
        Copyright &copy; 2024 <span>Food Yummy</span>
      </div>
    </CopyrightContainer>
  );
}
