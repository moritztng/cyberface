import React from 'react';
import './App.css';
import Logo from './Logo';
import Viewport from './Viewport';
import Script from './Script';
import Download from './Download';

function App() {
  return (
    <div className="App">
      <div className="Logo-container">
        <Logo />
      </div>
      <div className="Viewport-container">
        <Viewport />
      </div>
      <div className="Script-container">
        <Script />
      </div>
      <div className="Download-container">
        <Download />
      </div>
    </div>
  );
}

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/

export default App;
