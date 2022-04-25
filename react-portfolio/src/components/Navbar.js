import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    navbar: {
        background: '#e8eaf6'
    }
};

function Navbar() {
    return (
        <div style={styles.navbar}>
      <nav className="navbar">
        <h1>Oscar Charlie Bravo</h1>
        <div>
         <li>
            <Link to = "/about">About Me</Link>
        </li>
        <li>
            <Link to = "/projects">Projects</Link>
        </li>
        <li>
            <Link to = "/contact">Contact Me</Link>
        </li>
        <li>
            <Link to = "/resume">Resume</Link>
        </li>
        </div>
      </nav>
      </div>
    );
  }
  
  export default Navbar;
  