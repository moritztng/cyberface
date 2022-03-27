import React, { useRef } from 'react';
import './AudioInput.css';

function AudioInput(props: { onChange: Function; }) {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <div className="Audio-input" onClick={() => fileInput.current?.click()}>
      <input type="file" ref={fileInput} onChange={(event) => props.onChange(event.target.files ? event.target.files[0] : null)}/>
      <p>{fileInput.current?.files ? fileInput.current.files[0].name : 'Select File'}</p>
    </div>
  );
}

export default AudioInput;
