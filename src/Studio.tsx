import { useState, useRef } from 'react';
import './Studio.css';
import Header from './Header';
import Body from './Body';
import { AudioSettings, VideoSettings, fetchSynthesizer } from './Utils'; 

function Studio() {
  const audio = useRef(new Audio('https://storage.googleapis.com/synthesizer-audio/66db59c00f3730137117e26d34865887f6bb897793bd423943a368b0d93296bc.mp3'));
  const [animationUrl, setAnimationUrl] = useState('https://storage.googleapis.com/synthesizer-video/e571e4cab37ed34cf7d64df880a7705a5073dacd0b4a8fc6e308e54d74934d29.mp4');
  const [speaking, setSpeaking] = useState(false);
  const [animating, setAnimating] = useState('finished');

  async function synthesizeAudio(script: string, audioSettings: AudioSettings) {
    const speechId = await fetchSynthesizer('speech', {'ssml': script, 'voice': audioSettings.voice, 'rate': audioSettings.speed, 'pitch': audioSettings.pitch});
    const url = await fetchSynthesizer('add-music', {'id': speechId, 'music': audioSettings.music, 'volume': audioSettings.volume});
    audio.current.src = url;
    const audioId = url.split('/').slice(-1)[0].split('.')[0];
    return [speechId, audioId];
  }
  async function synthesizeVideo(speechId: string, audioId: string, videoSettings: VideoSettings) {
    setAnimationUrl('');
    const animationId = await fetchSynthesizer('speech2face', {'id': speechId});
    const graphicsId = await fetchSynthesizer('graphics', {'id': animationId, 'scene': videoSettings.scene});
    const url = await fetchSynthesizer('add-audio', {'audio-id': audioId, 'video-id': graphicsId});
    setAnimationUrl(url);
  }

  async function listen(script: string, audioSettings: AudioSettings) {
    if (!script || speaking) return;
    try {
      setSpeaking(true);
      await synthesizeAudio(script, audioSettings);
      setSpeaking(false);
      audio.current.play();
    } catch (e) {
      setSpeaking(false);
    }
  }
  async function animate(script: string, audioSettings: AudioSettings, videoSettings: VideoSettings) {
    if (!script || animating === 'loading') return;
    try {
      setAnimating('loading');
      const [speechId, audioId] = await synthesizeAudio(script, audioSettings);
      await synthesizeVideo(speechId, audioId, videoSettings);
      setAnimating('finished');
    } catch (e) {
      if (e instanceof Error && e.message === 'server error') {
        setAnimating('server error');
      } else {
        setAnimating('client error');
      }
    }
  }

  return (
    <div className="Studio">
      <Header downloadUrl={animationUrl} />
      <Body videoSrc={animationUrl} speaking={speaking} animating={animating} onListen={listen} onAnimate={animate} />
    </div>
  );
}

export default Studio;
