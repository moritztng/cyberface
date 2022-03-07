import React from 'react';
import './Viewport.css';
import Video from './Video';
import ProgressScreen from './ProgressScreen';

function Viewport() {
  return (
    <div className="Viewport">
      <Video />
      <ProgressScreen />
    </div>
  );
}

export default Viewport;
