import React from 'react';
import sunset from './Sunset.jpg';
import musical from './musical.jpg';
import notes from './notes.jpg';
import travel from './travel.jpg';
import quiz from './quiz.jpg';

const styles = {
    projects: {
        background: '#e8eaf6'
    },
    images: {
        margin: '100px',
        opacity: '0.5'
    }
};



function Projects() {
    return (
    <div style={styles.projects}>
    <body className="projects">
    <div>
    <div>
        <h3>Projects</h3>
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
    )
};

export default Projects;