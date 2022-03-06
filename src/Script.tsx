import React from 'react';
import './Script.css';
import TextInput from './TextInput';

function Script() {
  return (
    <div className="Script">
      <TextInput />
      <button className="Animate-button">animate</button>
      <a className="Download-button" href="https://ddz4ak4pa3d19.cloudfront.net/cache/6f/b7/6fb7f22ea33b65a09020724dc9240a80.jpg" download="animation">
        Download
      </a>
    </div>
  );
}

export default Script;
