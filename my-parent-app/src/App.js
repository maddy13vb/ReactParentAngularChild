import React from 'react';
import logo from './logo.svg';
import './App.css';


//localhost:4200 takes you to the child app which is Angular
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Creating my React Parent App!       
        </p>
        <a
          className="App-link"
          href="http://localhost:4200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This way to my Github!
        </a>
      </header>
    </div>
  );
}

export default App;
