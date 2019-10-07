import React from 'react';

function Projects(props) {

    const projects =
        [
            <>
                <h3>Book application</h3>
                <p>
                    Book application designed to allow users to create, view and post comments on listed books.
                </p>
                <p>
                    Authenticated users providing personal accounts enabling commenting functionality.
                </p>
                <p>
                    Restricted access to protected REST API endpoints if not authenticated.
                </p>
                <p>
                    Developed using React.js, Node.js, Express.js MySQL, HTML and CSS.
                </p>
                <div className={"Logos"}>
                    <img className={"Project-logo"} src={"logos/React.png"} alt="React Logo"/>
                    <img className={"Project-logo"} src={"logos/NodeJS.png"} alt="Node.js Logo"/>
                    <img className={"Project-logo"} src={"logos/MySQL.png"} alt="MySQL Logo"/>
                </div>
                <a className={"Btn"} href="https://github.com/BChancusi/book-application" target="_blank"
                   rel="noopener noreferrer">Code</a>
            </>,
            <>
                <h3>Distributed Budgeting System</h3>
                <p>
                    Single page web application allowing users to manage finances using a
                    version control system. Created for a client to resolve the issue of multiple users
                    making changes by providing a consolidated platform.
                </p>
                <p>
                    This project is built using React.js, with a Express.js backend for handling API
                    requests, deployed to Heroku. MySQL provides the database solution with HTML5 and CSS
                    used for elements and design. Critical components are tested using Jest
                    ensuring components function as desired.
                </p>

                <img className={"Project-image"} src="https://i.imgur.com/8qfyiT0.png" alt="DBS Demo"/>

                <div className={"Logos"}>
                    <img className={"Project-logo"} src={"logos/React.png"} alt="React Logo"/>
                    <img className={"Project-logo"} src={"logos/NodeJS.png"} alt="NodeJS Logo"/>
                    <img className={"Project-logo"} src={"logos/MySQL.png"} alt="MySQL Logo"/>
                    <img className={"Project-logo"} src={"logos/Heroku.png"} alt="Heroku Logo"/>
                    <img className={"Project-logo"} src={"logos/Jest.png"} alt="Jest Logo"/>
                </div>
                <div>
                    <a className={"Btn"} href="https://github.com/BChancusi/distributed"
                       target="_blank" rel="noopener noreferrer">Code</a>
                    <a className={"Btn"} href="https://distributed-budgeting.herokuapp.com/"
                       target="_blank" rel="noopener noreferrer">Project</a>
                </div>
            </>,
            <>
                <h3>SocialFans</h3>

                <p>Social web application allowing users to create posts, comment and create a paid
                    subscription.</p>
                <p>Developed using Vue.js, Firebase, HTML and CSS.</p>
                <p>Project managed on GitHub with contributions from group members. </p>
            </>,
            <>
                <h3>Portfolio</h3>
                <p>
                    Personal portfolio designed using React and deployed onto GitHub Pages.
                </p>
                <img className={"Project-image"} src={"project-images/portfolio.png"} alt="Portfolio Demo"/>
                <div className={"Logos"}>
                    <img className={"Project-logo"} src={"logos/React.png"} alt="React Logo"/>
                </div>
                <div>
                    <a className={"Btn"} href="https://github.com/BChancusi/portfolio" target="_blank"
                       rel="noopener noreferrer">Code</a>
                </div>
            </>,
            <>
                <h3>SpotFX</h3>
                <p>
                    Hackathon created project with six contributors designed to visualise Spotify tracks.
                </p>
                <p>
                    Developed using HTML, JQuery and three.js.
                </p>
                <p>
                    In charge of interacting with the Spotify API and managing requests.
                </p>
            </>
        ];

    return (
        <section>
            <h2>Projects</h2>
            <div className="Projects">
            </div>
        </section>);
}

export default Projects;