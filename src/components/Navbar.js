// import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";
import './styling/navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <h1>Oscar Charlie Bravo</h1>
            <div id="links">
                <h4>
                    <Link to = "/React-PortfolioV2/about">About Me</Link>
                </h4>
                <h4>
                    <Link to = "/React-PortfolioV2/projects">Projects</Link>
                </h4>
                <h4>
                    <Link to = "/React-PortfolioV2/contact">Contact Me</Link>
                </h4>
                <h4>
                    <Link to = "/React-PortfolioV2/resume">Resume</Link>
                </h4>
            </div>
      </nav>
    );
  }
  
  export default Navbar;
  