import React from 'react';
import './Viewport.css';
import Video from './Video';
import Loading from './Loading';

function Viewport(props: { videoSrc: string; loading: boolean; }) {
  let element;
  if (props.loading) {
    element = <Loading text="Loading.." />;
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
