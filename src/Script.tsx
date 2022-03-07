import React, { useState } from 'react';
import './Script.css';
import TextInput from './TextInput';

function Script(props: { onAnimate: Function; }) {
  const [text, setText] = useState('It took me a long time to develop a voice.');
  return (
    <div className="Script">
      <TextInput value={text} onChange={setText} />
      <button className="Animate-button" onClick={() => props.onAnimate(text)}>animate</button>
    </div>
  );
}

export default Script;
