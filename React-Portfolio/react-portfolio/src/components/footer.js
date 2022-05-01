import React from 'react';
// import { Link } from "react-router-dom";


const styles = {
    footer: {
        background: '#483D8B',
    }
};


function Footer() {
    return (
        <div style={styles.footer}>
       <div className='footer'>
        <div id="icons">
            <a id="icons" href="https://github.com/oscarcbryant/"><i class="fa fa-github" style={{fontSize: '48px'}}></i></a>
            <a id="icons" href="https://www.linkedin.com/in/oscarcbryant/"><i class="fa fa-linkedin-square" style={{fontSize: '48px'}}></i></a>
            <a id="icons" href="mailto:oscarcbryant@gmail.com"><i class="fa fa-envelope" style={{fontSize: '48px'}}></i></a>
        </div>
       </div> 
       </div>
    )
};

export default Footer;