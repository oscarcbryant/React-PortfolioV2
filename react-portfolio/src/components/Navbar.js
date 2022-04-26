import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    navbar: {
        background: '#e8eaf6',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',

    }
};

function Navbar() {
    return (
        <div style={styles.navbar}>
      <nav className="navbar">
        <h1>Oscar Charlie Bravo</h1>
        <div style={styles.links}>
         <h4>
            <Link to = "/about">About Me</Link>
        </h4>
        <h4>
            <Link to = "/projects">Projects</Link>
        </h4>
        <h4>
            <Link to = "/contact">Contact Me</Link>
        </h4>
        <h4>
            <Link to = "/resume">Resume</Link>
        </h4>
        </div>
      </nav>
      </div>
    );
  }
  
  export default Navbar;
  