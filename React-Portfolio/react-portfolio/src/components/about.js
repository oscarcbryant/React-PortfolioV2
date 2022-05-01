import React from "react";
import Amy from './amy.jpg';
import './styling/about.css'


function About() {
    return (
        <body className="aboutBody" id="aboutBody">
                <h2>About Me</h2>
                <div id="amy">
                <img class="amy" src={Amy} alt="amy" />
                 <div id='text'>
                    <p>Hi, my name is Oscar and I am on my way to becoming a full stack web developer. I'm learning to code and having fun in the process! Outside of coding, I work in corporate I.T as a field account manager, assisting clients maximize their return from technology investments. With so many cloud techologies written with open API's, I'm using my coding skills to enhance the way I communicate with clients today. When I am not working or coding, I love the beach and skiing... I'm pictured here with my dog, Amy... A blue english staffy with a heart of gold.</p>
                </div>
                </div>
        </body>
    );
}

export default About;
