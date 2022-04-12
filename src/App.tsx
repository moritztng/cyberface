import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

async function query(urlString: string, params: { [key: string]: string; }) {
  const url = new URL(urlString);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }
  const response = await fetch(url.toString());
  const text = await response.text();
  return text;
}

function App() {
  const [lastScript, setLastScript] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');
  const [speaking, setSpeaking] = useState(false);
  const [animating, setAnimating] = useState(false);
  async function animate(script: string) {
    setAnimationUrl('');
    setAnimating(true);
    const id = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/speech', {'ssml': script, 'language': 'en-GB', 'speaker': 'en-GB-Wavenet-F', 'gender': 'female', 'rate': '0.85', 'pitch': '-4.0', 'volume': '0.0'});
    let url = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/music', {'id': id, 'volume': '-10'});
    setAudioUrl(url);
    await query('http://34.91.185.83:5000/animate', {'id': id});
    await query('http://34.91.185.83:5001/render', {'id': id});
    url = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/audio', {'id': id});
    setLastScript(script);
    setAnimationUrl(url);
    setAnimating(false);
  }
  async function listen(script: string) {
    let url;
    if (script === lastScript) {
      url = audioUrl;
    } else {
      setSpeaking(true);
      const id = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/speech', {'ssml': script, 'language': 'en-GB', 'speaker': 'en-GB-Wavenet-F', 'gender': 'female', 'rate': '0.85', 'pitch': '-4.0', 'volume': '0.0'});
      url = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/music', {'id': id, 'volume': '-10'});
      setLastScript(script);
      setAudioUrl(url);
      setSpeaking(false);
    }
    new Audio(url).play();
  }

  return (
    <div className="App">
      <Header downloadUrl={animationUrl} />
      <Body onListen={listen} onAnimate={animate} videoSrc={animationUrl} speaking={speaking} animating={animating} />
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
