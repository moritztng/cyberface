import React from 'react';
import './TextInput.css';

function TextInput(props: { value: string; onChange: Function; }) {
  return <textarea className="Text-input" value={props.value} onChange={(event) => props.onChange(event.target.value)} />;
}

export default TextInput;
