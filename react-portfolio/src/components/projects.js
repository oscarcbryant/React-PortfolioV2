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
        <a href='https://oscarcbryant.github.io/Weather-Dashboard/'>
            <img src={sunset} alt="sunset" />
        </a>
        <a href='https://musical-chair.herokuapp.com/' >
            <img src={musical} alt="musical" />
        </a>
        <a href='https://vast-everglades-88551.herokuapp.com/'>
            <img src={notes} alt="notes" />
        </a>
        <a href='https://gabi-m-p.github.io/Covid-19-Travel-Planner/'>
            <img src={travel} alt="travel" />
        </a>
        <a href='https://oscarcbryant.github.io/Code-Quiz/'>
            <img src={quiz} alt="quiz" />
        </a>

    </body>
    )
};

export default Projects;