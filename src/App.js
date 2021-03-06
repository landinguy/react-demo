import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Clock'
import Clock from "./Clock";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {/*<p>*/}
                    {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    <h2>Welcome to React</h2>
                    <Clock/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
