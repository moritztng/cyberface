import React from 'react';
import './Body.css';
import Script from './Script';
import Viewport from './Viewport';

function Body(props: { onAnimate: Function; videoSrc: string; loading: boolean; }) {
  return (
    <div className="Body">
      <div className="Content">
        <Script onAnimate={props.onAnimate} />
        <Viewport videoSrc={props.videoSrc} loading={props.loading} />
      </div>
    </div>
  );
}

export default Body;
