import React from 'react';
import './Video.css';

function Video(props: { src: string; }) {
  return <video className="Video" src={props.src} controls />;
}

export default Video;
