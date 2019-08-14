import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// const NavComponent = React.createClass({
// 	render: function() {
// 		return (
// 			<nav>
// 				<div className="navWide">
// 					<div className="wideDiv">
// 						<a href="https://github.com/maddy13vb/ReactParentAngularChild">Link 1</a>
// 						<a href="https://github.com/maddy13vb/ReactParentAngularChild">Link 2</a>
// 						<a href="https://github.com/maddy13vb/ReactParentAngularChild">Link 3</a>
// 					</div>
// 				</div>
// 				<div className="navNarrow">
// 					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
// 					<div className="narrowLinks">
// 						<a href="https://github.com/maddy13vb/ReactParentAngularChild" onClick={this.burgerToggle}>Link 1</a>
// 						<a href="https://github.com/maddy13vb/ReactParentAngularChild" onClick={this.burgerToggle}>Link 2</a>
// 						<a href="https://github.com/maddy13vb/ReactParentAngularChild" onClick={this.burgerToggle}>Link 3</a>
// 					</div>
// 				</div>
// 			</nav>
// 		);
// 	},
// 	burgerToggle: function() {
// 		let linksEl = document.querySelector('.narrowLinks');
// 		if (linksEl.style.display === 'block') {
// 			linksEl.style.display = 'none';
// 		} else {
// 			linksEl.style.display = 'block';
// 		}
// 	}
// });

// ReactDOM.render(<NavComponent />, document.querySelector('navbar'));

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
          href="https://github.com/maddy13vb"
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
