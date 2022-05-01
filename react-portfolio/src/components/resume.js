import React from 'react';
import './styling/resume.css'


function Resume() {
    return (
    <body className="resume" id="resume">
        <h2>Resume</h2>
        <p>Check out my Resume <a href="https://docs.google.com/document/d/1eq5-LPB50wH7V3E6v7s-f765jpakRw_1/edit?usp=sharing&ouid=107807854027561897623&rtpof=true&sd=true">here</a></p>
        <br></br>
        <h3>My skills</h3>
        <ul>Front End
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Heroku</li>
        </ul>
        <ul>Back End
            <li>Node.js</li>
            <li>Express</li>
            <li>MERN</li>
            <li>Mongo</li>
        </ul>
    </body>
    )
};

export default Resume;