import React from 'react';
import './Body.css';
import Script from './Script';
import Viewport from './Viewport';

function Body(props: { onAnimate: Function; }) {
  return (
    <div className="Body">
      <div className="Content">
        <Script onAnimate={props.onAnimate} />
        <Viewport />
      </div>
    </div>
  );
}

export default Body;
