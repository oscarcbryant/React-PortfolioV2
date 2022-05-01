import React from 'react';
import sunset from './Sunset.jpg';
import musical from './musical.jpg';
import notes from './notes.jpg';
import travel from './travel.jpg';
import quiz from './quiz.jpg';
import './styling/projects.css'


function Projects() {
    return (
    <body className="projects">
        <h2>Projects</h2>
        <div id="projectlinks">
        <h4>Weather Dashboard</h4>
        <a href='https://oscarcbryant.github.io/Weather-Dashboard/'>
            <img class='projectimage' src={sunset} alt="sunset" />
        </a>
        <h4>Musical Chairs</h4>
        <a href='https://musical-chair.herokuapp.com/' >
            <img class='projectimage' src={musical} alt="musical" />
        </a>
        <h4>Digital Note Taker</h4>
        <a href='https://vast-everglades-88551.herokuapp.com/'>
            <img class='projectimage' src={notes} alt="notes" />
        </a>
        <h4>Travel Application</h4>
        <a href='https://gabi-m-p.github.io/Covid-19-Travel-Planner/'>
            <img class='projectimage' src={travel} alt="travel" />
        </a>
        <h4>Coding Quiz</h4>
        <a href='https://oscarcbryant.github.io/Code-Quiz/'>
            <img class='projectimage' src={quiz} alt="quiz" />
        </a>
        </div>
    </body>
    )
};

export default Projects;