import React from 'react';
import './ScriptInput.css';

function ScriptInput(props: { value: string; onChange: Function; }) {
  return <textarea className="Script-input" value={props.value} onChange={(event) => props.onChange(event.target.value)} />;
}

export default ScriptInput;
