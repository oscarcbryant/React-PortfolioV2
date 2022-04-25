import React from 'react';

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
        <ul>
         <a href="/about">About Me</a>
         <a>Projects</a>
         <a>Contact Me</a>
         <a>Resume</a>
        </ul>
      </nav>
      </div>
    );
  }
  
  export default Navbar;
  