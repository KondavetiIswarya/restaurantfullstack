import React, { useState, useEffect } from "react"; // Add this line to import useState
import styled from "styled-components";
import foodYummy from '../assets/foodyummy.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function NavigationBar({ setActiveSection }) {
  const [navbarState, setNavbarState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    
    const handleClickOutside = () => setNavbarState(false);
    
    // Add event listener
    html.addEventListener("click", handleClickOutside);
    
    // Cleanup event listener on component unmount
    return () => {
      html.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Nav>
        <div className="brand">
          <img src={foodYummy} alt="Icon" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#home" onClick={() => setActiveSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveSection("about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setActiveSection("menu")}>
              Menu
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setActiveSection("services")}>
              Our Services
            </a>
          </li>
          {/* <li>
            <a href="#contact" onClick={() => setActiveSection("contact")}>
              Contact Us
            </a>
          </li> */}
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setActiveSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveSection("about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setActiveSection("menu")}>
              Menu
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setActiveSection("services")}>
              Our Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveSection("contact")}>
              Contact Us
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

// Styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;

  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;

    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #f9c74f;
        }
      }
    }
  }
  
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;

  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;

    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;

        &:hover {
          color: #fc4958;
        }
      }
    }
  }
`;
