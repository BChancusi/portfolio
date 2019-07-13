import React from 'react';

function Projects() {
    return (
        <section>
            <h3>Projects</h3>
            <div className="Projects">
                <article>

                    <h4>Distributed Budgeting System</h4>
                    <a href="https://github.com/BChancusi/distributed">Code</a>
                    <a href="https://distributed-budgeting.herokuapp.com/">Project</a>

                    <p>
                        Web application designed to allow multiple users to input financial data
                        concurrently leveraging branches and committing.
                    </p>
                    <p>
                        Developed using React.js, Express.js and MySQL.
                    </p>

                    <img src="https://i.imgur.com/8qfyiT0.png" alt="DBS Demo"/>

                </article>
                <article>
                    <h4>Social application</h4>

                    <p>Social web appliction allowing users to create posts/comment and create a paid subscription. </p>
                    <p>Developed using Vue.js, Firebase, HTML and CSS.</p>
                    <p>Project managed on GitHub with contributions from group members.</p>
                </article>
                <article>
                    <h4>SpotFX</h4>
                    <p>
                        Hackathon created project with six contributors designed to visualise Spotify tracks.
                    </p>
                    <p>
                        Developed using HTML, JQuery and three.js.
                    </p>
                    <p>
                        In charge of interacting with the Spotify API and managing requests.
                    </p>
                </article>
            </div>
        </section>

    );
}

export default Projects;