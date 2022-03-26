import React, { useState } from 'react';
import './Input.css';
import InputType from './InputType';
import ScriptInput from './ScriptInput';
import AudioInput from './AudioInput';

function Input(props: { onAnimate: Function; }) {
  const [type, setType] = useState('script');
  const [script, setScript] = useState('It took me a long time to develop a voice.');
  const [audio, setAudio] = useState(null);
  function onAnimate() {
    if (type === 'script') {
      props.onAnimate(script);
    } else if (type === 'audio') {
      props.onAnimate(audio);
    }
  }

  return (
    <div className="Input">
      <InputType type={type} onSelect={setType} />
      <div className="Input-value">
        {type === 'script' && <ScriptInput value={script} onChange={setScript} />}
        {type === 'audio' && <AudioInput onChange={setAudio} />}
      </div>
      <button className="Animate-button" onClick={onAnimate}>animate</button>
    </div>
  );
}

export default Input;
