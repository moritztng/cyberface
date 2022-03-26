import React from 'react';
import './AudioInput.css';

function AudioInput(props: { onChange: Function; }) {
  return (
    <div className="Audio-input">
      <input type="file" onChange={(event) => props.onChange(event.target.files ? event.target.files[0] : null)}/>
    </div>
  );
}

export default AudioInput;
