import React from 'react';
import './Body.css';
import Script from './Script';
import Viewport from './Viewport';

function Body() {
  return (
    <div className="Body">
      <div className="Content">
        <Script />
        <Viewport />
      </div>
    </div>
  );
}

export default Body;
