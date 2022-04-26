import React from 'react';
import sunset from './Sunset.jpg';
import musical from './musical.jpg';
import notes from './notes.jpg';
import travel from './travel.jpg';
import quiz from './quiz.jpg';

const styles = {
    projects: {
        background: '#483D8B'
    },
    images: {
        margin: '100px',
        opacity: '1'
    }
};



function Projects() {
    return (
    <div className="component">
    <div style={styles.projects}>
    <body className="projects">
    <div>
    <div>
        <h1>Projects</h1>
    </div>
    <div style={styles.images}>
        <img style={styles.images} src={sunset} alt="sunset" />
        <img style={styles.images} src={musical} alt="musical" />
        <img style={styles.images} src={notes} alt="notes" />
        <img style={styles.images} src={travel} alt="travel" />
        <img style={styles.images} src={quiz} alt="quiz" />
    </div>
    </div>
    </body>
    </div>
    </div>
    )
};

export default Projects;