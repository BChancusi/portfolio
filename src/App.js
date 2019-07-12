import React from 'react';
import './App.css';
import Projects from './Project';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <header>
                    <h1>Brandon Chancusi</h1>
                    <h2>brandonchancusi@gmail.com</h2>
                    <a href="https://github.com/BChancusi">
                        <img src={"GitHub.png"} alt="GitHub"/>
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-chancusi-217559172">
                        <img src={"LinkedIn.png"} alt="LinkedIn" height={"32px"} width={"32px"}/>
                    </a>

                </header>

            </header>
            <section>
                <h3>Projects</h3>
                <Projects/>
            </section>
        </div>
    );
}

export default App;
