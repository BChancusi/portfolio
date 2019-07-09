import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    <h3>Projects</h3>
                    <article>
                        <h4>Distributed Budgeting System</h4>
                        <a href="https://github.com/BChancusi/distributed">Code</a>
                        <a href="https://hidden-basin-52987.herokuapp.com">Website</a>

                        <p>Web application designed to allow multiple users to input financial data
                            concurrently leveraging branches and committing.
                        </p>

                        <p>Developed using React.js, Express.js and MySQL.</p>

                        {/*<img src="https://i.imgur.com/8qfyiT0.png" alt="DBS Demo Image" height="200" width="400">*/}
                    </article>
                </section>
            </header>

        </div>
    );
}

export default App;
