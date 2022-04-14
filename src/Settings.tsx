import React from 'react';
import './Settings.css';

function Settings(props: { value: { character: string; voice: string; volume: string; pitch: string; speed: string; music: string; }; onChange: Function; }) {
  return (
    <div className="Settings">
      <div className="Row">
        <label htmlFor="character">Character</label>      
        <select id="character" value={props.value.character} onChange={(event) => props.onChange({...props.value, character: event.target.value})}>
          <option value="astronaut">Astronaut</option>
        </select>
      </div>
      <div className="Row">
        <label htmlFor="voice">Voice</label>      
        <select id="voice" value={props.value.voice} onChange={(event) => props.onChange({...props.value, voice: event.target.value})}>
          <option value="en-US-Wavenet-A">Ada</option>
          <option value="en-US-Wavenet-B">Mary</option>
          <option value="en-US-Wavenet-C">Lisa</option>
          <option value="en-US-Wavenet-D">James</option>
          <option value="en-US-Wavenet-E">David</option>
          <option value="en-US-Wavenet-F">Paul</option>
        </select>
      </div>
      <div className="Row">
        <label htmlFor="volume">Volume</label>
        <div className="Range">
          <input type="range" id="volume" min="-20" max="20" step="1" value={props.value.volume} onChange={(event) => props.onChange({...props.value, volume: event.target.value})} />
          <span>{props.value.volume}</span>
        </div>
      </div>
      <div className="Row">
        <label htmlFor="pitch">Pitch</label>
        <div className="Range">
          <input type="range" id="pitch" min="-20" max="20" step="1" value={props.value.pitch} onChange={(event) => props.onChange({...props.value, pitch: event.target.value})} />
          <span>{props.value.pitch}</span>
        </div>     
      </div>
      <div className="Row">
        <label htmlFor="speed">Speed</label>
        <div className="Range">
          <input type="range" id="speed" min="0.25" max="4" step="0.05" value={props.value.speed} onChange={(event) => props.onChange({...props.value, speed: event.target.value})} />
          <span>{props.value.speed}</span>
        </div>
      </div>
      <div className="Row">
        <label htmlFor="music">Music</label>      
        <select id="music" value={props.value.music} onChange={(event) => props.onChange({...props.value, music: event.target.value})}>
          <option value="interstellar">Interstellar</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
