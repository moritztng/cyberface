import React from 'react';
import logo from './logo.svg';
import './App.css';
import Viewport from './Viewport';
import Script from './Script';

function App() {
  return (
    <div className="App">
      <img src={logo} className="Logo" alt="logo" />
      <Viewport />
      <Script />
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
