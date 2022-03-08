import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
  const [animationUrl, setAnimationUrl] = useState('');
  const [animating, setAnimating] = useState(false);
  async function animate(text: string) {
    setAnimationUrl('');
    setAnimating(true);
    const response = await fetch(`http://34.90.194.181/synthesize?text=${text}`);
    const responseText = await response.text();
    console.log(responseText);
    setAnimationUrl(responseText);
    setAnimating(false);
  }

  return (
    <div className="App">
      <Header downloadUrl={animationUrl} />
      <Body onAnimate={animate} videoSrc={animationUrl} loading={animating} />
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
