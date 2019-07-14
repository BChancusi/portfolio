import React from 'react';

function Projects() {
    return (
        <section className={"Grey"}>
            <h3>Projects</h3>
            <div className="Projects">
                <article className={"Grey"}>

                    <h4>Distributed Budgeting System</h4>
                    <img className={"Project-image"} src="https://i.imgur.com/8qfyiT0.png" alt="DBS Demo"/>
                    <p>
                        Single page web app allowing users to manage finances using a
                        version control system. Created for a client to resolve the issue of multiple users making
                        changes by providing a consolidated platform.
                    </p>
                    <p>
                        This project is built using React.js , with a Express.js backend for handling API requests, and
                        runs on Heroku. MySQL provides the database solution and
                        with HTML5 and CSS used for elements and design. Critical components are tested using Jest
                        ensuring components function as desired.
                    </p>

                    <div className={"Logos"}>
                        <img className={"Project-logo"} src={"React.png"} alt="DBS Demo"/>
                        <img className={"Project-logo"} src={"Node.png"} alt="DBS Demo"/>
                        <img className={"Project-logo"} src={"Express.png"} alt="DBS Demo"/>
                        <img className={"Project-logo"} src={"MySQL.png"} alt="DBS Demo"/>
                        <img className={"Project-logo"} src={"Heroku.png"} alt="DBS Demo"/>
                    </div>
                    <div>
                        <a className={"Btn"} href="https://github.com/BChancusi/distributed">Code</a>
                        <a className={"Btn"} href="https://distributed-budgeting.herokuapp.com/">Project</a>
                    </div>
                </article>
                <article>
                    <h4>SocialFans</h4>

                    <p>Social web application allowing users to create posts/comment and create a paid subscription.</p>
                    <p>Developed using Vue.js, Firebase, HTML and CSS.</p>
                    <p>Project managed on GitHub with contributions from group members. </p>
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