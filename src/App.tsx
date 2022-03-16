import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

async function query(urlString: string, key: string, value: string) {
  const url = new URL(urlString);
  url.searchParams.append(key, value);
  const response = await fetch(url.toString());
  const text = await response.text();
  return text;
}

function App() {
  const [speechUrl, setSpeechUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');
  const [animating, setAnimating] = useState(false);
  async function animate(text: string) {
    setSpeechUrl('');
    setAnimationUrl('');
    setAnimating(true);
    let url = await query('https://speech-ukp4sgtskq-ez.a.run.app/synthesize', 'text', text);
    setSpeechUrl(url);
    const id = url.split('/').slice(-1)[0].split('.')[0];
    await query('http://34.91.23.153:5000/animate', 'id', id);
    url = await query('http://34.91.23.153:5001/render', 'id', id);
    setAnimationUrl(url);
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
