import React from 'react';
import './InputType.css';

function InputType(props: { type: string; onSelect: Function; }) {
  return (
    <div className="Input-type">
      <span className={props.type === 'script' ? 'Selected' : undefined} onClick={() => props.onSelect('script')}>Script</span>
      <span className={props.type === 'audio' ? 'Selected' : undefined} onClick={() => props.onSelect('audio')}>Audio</span>
    </div>
  );
}

export default InputType;
