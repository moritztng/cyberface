import React from 'react';
import './Stopped.css';

function Stopped(props: { onRestart: Function; }) {
  return (
    <div className="Stopped">
      <h1>Session closed due to inactivity</h1>
      <button className="Button" onClick={() => props.onRestart()}>Restart</button>
    </div>
  );
}

export default Stopped;
