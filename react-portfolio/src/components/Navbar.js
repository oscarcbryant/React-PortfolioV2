import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    navbar: {
        background: '#e8eaf6',

        alignItems: 'centre'
    },
    // aboutHeader: {
    //     padding: '20px'

    // }
    }

function Navbar() {
    return (
        <div style={styles.navbar}>
      <nav className="navbar">
        <h1 style={styles.aboutHeader}>Oscar Charlie Bravo</h1>
        <div id="links">
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
  