import React from 'react';
import './App.css';
import Projects from './projects/Projects';
import Skills from './Skills';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Brandon Chancusi</h1>
                <div className={"App-links"}>
                    <a href="https://github.com/BChancusi"  target="_blank" rel="noopener noreferrer">
                        <img src={"logos/GitHub.png"} alt="GitHub Logo" title={"GitHub"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/brandon-chancusi-217559172"  target="_blank"
                       rel="noopener noreferrer">
                        <img src={"logos/LinkedIn.png"} alt="LinkedIn Logo" title={"LinkedIn"}/>
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
