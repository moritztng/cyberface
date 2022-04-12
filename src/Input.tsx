import React, { useState } from 'react';
import './Input.css';
import InputType from './InputType';
import Script from './Script';
import Settings from './Settings';

function Input(props: { onListen: Function; onAnimate: Function; speaking: boolean; }) {
  const [type, setType] = useState('script');
  const [script, setScript] = useState('It took me a long time to develop a voice.');

  return (
    <div className="Input">
      <InputType type={type} onSelect={setType} />
      <div className="Input-value">
        {type === 'script' && <Script value={script} onChange={setScript} />}
        {type === 'settings' && <Settings />}
      </div>
      <div className="Buttons">
        <button className="Listen-button" onClick={() => {props.onListen(script)}}>{ props.speaking ? 'loading..' : 'listen' }</button>
        <button className="Animate-button" onClick={() => {props.onAnimate(script)}}>animate</button>
      </div>
    </div>
  );
}

export default Input;
