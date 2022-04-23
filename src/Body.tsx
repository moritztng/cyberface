import React from 'react';
import './Body.css';
import Input from './Input';
import Viewport from './Viewport';

function Body(props: { onListen: Function; onAnimate: Function; videoSrc: string; speaking: boolean; animating: boolean; }) {
  return (
    <div className="Body">
      <div className="Content">
        <Input onListen={props.onListen} onAnimate={props.onAnimate} speaking={props.speaking} animating={props.animating} />
        <Viewport videoSrc={props.videoSrc} loading={props.animating} />
      </div>
    </div>
  );
}

export default Body;
