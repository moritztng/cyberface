import { useState } from 'react';
import './Input.css';
import InputType from './InputType';
import Script from './Script';
import Settings from './Settings';

function Input(props: { speaking: boolean; animating: string; onListen: Function; onAnimate: Function; }) {
  const [type, setType] = useState('script');
  const [script, setScript] = useState('');
  const [audioSettings, setAudioSettings] = useState({voice: 'en-GB-Wavenet-F', volume: '-10.0', pitch: '-4.0', speed: '0.85', music: 'interstellar'});
  const [videoSettings, setVideoSettings] = useState({scene: 'space'});

  return (
    <div className="Input">
      <InputType type={type} onSelect={setType} />
      <div className="Input-value">
        {type === 'script' && <Script value={script} onChange={setScript} />}
        {type === 'settings' && <Settings audio={audioSettings} video={videoSettings} onAudioChange={setAudioSettings} onVideoChange={setVideoSettings} />}
      </div>
      <div className="Buttons">
        <button className={'Listen-button Button' + ((script && !props.speaking) ? ' Button-hover' : '')} onClick={() => props.onListen(script, audioSettings)}>{props.speaking ? 'loading..' : 'listen'}</button>
        <button className={'Animate-button Button' + ((script && props.animating !== 'loading') ? ' Button-hover' : '')} onClick={() => props.onAnimate(script, audioSettings, videoSettings)}>{props.animating === 'loading' ? 'loading..' : 'animate'}</button>
      </div>
    </div>
  );
}

export default Input;
