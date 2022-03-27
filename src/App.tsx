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
  async function animate(input: string | File) {
    setSpeechUrl('');
    setAnimationUrl('');
    setAnimating(true);
    let url;
    if (typeof input === 'string') {
      url = await query('https://speech-ukp4sgtskq-ez.a.run.app/synthesize', 'text', input);
    } else {
      const formData = new FormData();
      formData.append('audio', input);
      const response = await fetch('https://europe-west1-synthesizer-337314.cloudfunctions.net/upload-audio', {method: 'POST', body: formData});
      url = await response.text();
    }
    setSpeechUrl(url);
    const id = url.split('synthesizer-speech/')[1].split('.')[0];
    await query('http://34.90.226.174:5000/animate', 'id', id);
    url = await query('http://34.90.226.174:5001/render', 'id', id);
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
