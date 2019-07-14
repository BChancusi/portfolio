import React from 'react';
import './App.css';
import Projects from './Project';
import Skills from './Skills';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Brandon Chancusi</h1>
                <h2>brandonchancusi@gmail.com</h2>
                <div className={"App-links"}>
                    <a href="https://github.com/BChancusi">
                        <img src={"GitHub.png"} alt="GitHub" title={"GitHub"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-chancusi-217559172">
                        <img src={"LinkedIn.png"} alt="LinkedIn" title={"LinkedIn"}/>
                    </a>
                </div>
            </header>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;

//TODO make header stick
