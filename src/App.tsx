import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

interface Settings {
  scene: 'space' | 'fluid';
  voice: string;
  volume: string;
  pitch: string;
  speed: string;
  music: string;
}

const sceneToPort = {'space': '5001', 'fluid': '5002'};

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
  const [audioUrl, setAudioUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');
  const [speaking, setSpeaking] = useState(false);
  const [animating, setAnimating] = useState(false);
  async function animate(script: string, settings: Settings) {
    setAudioUrl('');
    setAnimationUrl('');
    setAnimating(true);
    const speechId = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/speech', {'ssml': script, 'voice': settings.voice, 'rate': settings.speed, 'pitch': settings.pitch});
    let url = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/music', {'id': speechId, 'music': settings.music, 'volume': settings.volume});
    setAudioUrl(url);
    const musicId = url.split('synthesizer-music/')[1].split('.')[0];
    const animateId = await query('http://34.147.22.144:5000/animate', {'id': speechId});
    const renderId = await query(`http://34.147.22.144:${sceneToPort[settings.scene]}/render`, {'id': animateId});
    url = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/audio', {'audio-id': musicId, 'video-id': renderId});
    setAnimationUrl(url);
    setAnimating(false);
  }
  async function listen(script: string, settings: Settings) {
    setAudioUrl('');
    setSpeaking(true);
    const id = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/speech', {'ssml': script, 'voice': settings.voice, 'rate': settings.speed, 'pitch': settings.pitch});
    const url = await query('https://europe-west1-synthesizer-337314.cloudfunctions.net/music', {'id': id, 'music': settings.music, 'volume': settings.volume});
    setAudioUrl(url);
    setSpeaking(false);
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
