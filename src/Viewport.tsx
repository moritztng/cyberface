import React from 'react';
import './Viewport.css';
import Video from './Video';
import ProgressScreen from './ProgressScreen';

function Viewport(props: { videoSrc: string; loading: boolean; }) {
  let element;
  if (props.loading) {
    element = <ProgressScreen />;
  } else if (props.videoSrc) {
    element = <Video src={props.videoSrc} />;
  }

  return (
    <div className="Viewport">
      {element}
    </div>
  );
}

export default Viewport;
