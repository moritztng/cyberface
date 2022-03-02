import React from 'react';
import './Animation.css';
import Video from './Video';
import DownloadButton from './DownloadButton';

function Animation() {
  return (
    <div className="Animation">
      <div className="Video-container">
        <Video />
      </div>
      <div className="Download-container">
        <DownloadButton />
      </div>
    </div>
  );
}

export default Animation;
