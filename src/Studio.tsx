import React, { useState } from 'react';
import './Studio.css';
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

async function query(urlString: string, params: { [key: string]: string; }) {
  const url = new URL(urlString);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.append(key, value);
  }
  const response = await fetch(url.toString());
  const text = await response.text();
  return text;
}

function Studio() {
  const [audioUrl, setAudioUrl] = useState('');
  const [animationUrl, setAnimationUrl] = useState('');
  const [speaking, setSpeaking] = useState(false);
  const [animating, setAnimating] = useState(false);
  async function animate(script: string, settings: Settings) {
    setAudioUrl('');
    setAnimationUrl('');
    setAnimating(true);
    const speechId = await query('https://synthesizer-ukp4sgtskq-ez.a.run.app/speech', {'ssml': script, 'voice': settings.voice, 'rate': settings.speed, 'pitch': settings.pitch});
    let url = await query('https://synthesizer-ukp4sgtskq-ez.a.run.app/music', {'id': speechId, 'music': settings.music, 'volume': settings.volume});
    setAudioUrl(url);
    const musicId = url.split('synthesizer-music/')[1].split('.')[0];
    const speech2faceId = await query('https://synthesizer-ukp4sgtskq-ez.a.run.app/speech2face', {'id': speechId});
    const graphicsId = await query(`https://synthesizer-ukp4sgtskq-ez.a.run.app/graphics`, {'id': speech2faceId, 'scene': settings.scene});
    url = await query('https://synthesizer-ukp4sgtskq-ez.a.run.app/audio', {'audio-id': musicId, 'video-id': graphicsId});
    setAnimationUrl(url);
    setAnimating(false);
  }
  async function listen(script: string, settings: Settings) {
    setAudioUrl('');
    setSpeaking(true);
    const id = await query('https://synthesizer-ukp4sgtskq-ez.a.run.app/speech', {'ssml': script, 'voice': settings.voice, 'rate': settings.speed, 'pitch': settings.pitch});
    const url = await query('https://synthesizer-ukp4sgtskq-ez.a.run.app/music', {'id': id, 'music': settings.music, 'volume': settings.volume});
    setAudioUrl(url);
    setSpeaking(false);
    new Audio(url).play();
  }

  return (
    <div className="Studio">
      <Header downloadUrl={animationUrl} />
      <Body onListen={listen} onAnimate={animate} videoSrc={animationUrl} speaking={speaking} animating={animating} />
    </div>
  );
}

export default Studio;
