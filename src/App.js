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
                </header>

            </header>
            <section>
                <h3>Projects</h3>
                <Projects/>
            </section>
            <footer className="App-header">
                <a href="https://www.linkedin.com/in/brandon-chancusi-217559172/">LinkedIn</a>
                <a href="https://github.com/BChancusi">Github</a>
                <p>brandonchancusi@gmail.com</p>
            </footer>
        </div>
    );
}

export default App;
