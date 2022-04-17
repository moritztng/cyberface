import React from 'react';
import './Settings.css';

const defaultVoiceSettings: { [voice: string]: { pitch: string; speed: string; }; } = {
  'en-GB-Wavenet-F': {pitch: '-4.0', speed: '0.85'},
  'en-US-Wavenet-F': {pitch: '0', speed: '0.9'},
  'en-US-Wavenet-E': {pitch: '0', speed: '0.9'},
  'en-US-Wavenet-B': {pitch: '-5.0', speed: '0.9'},
  'en-GB-Wavenet-D': {pitch: '0', speed: '0.85'},
  'en-GB-Wavenet-B': {pitch: '-5.0', speed: '0.85'}
}

function Settings(props: { value: { scene: string; voice: string; volume: string; pitch: string; speed: string; music: string; }; onChange: Function; }) {
  return (
    <div className="Settings">
      <div className="Row">
        <label htmlFor="scene">Scene</label>      
        <select id="scene" value={props.value.scene} onChange={(event) => props.onChange({...props.value, scene: event.target.value})}>
          <option value="space">Space</option>
          <option value="fluid">Fluid</option>
        </select>
      </div>
      <div className="Row">
        <label htmlFor="voice">Voice</label>      
        <select id="voice" value={props.value.voice} onChange={(event) => props.onChange({...props.value, voice: event.target.value, ...defaultVoiceSettings[event.target.value]})}>
          <option value="en-GB-Wavenet-F">Ada</option>
          <option value="en-US-Wavenet-F">Mary</option>
          <option value="en-US-Wavenet-E">Lisa</option>
          <option value="en-US-Wavenet-B">James</option>
          <option value="en-GB-Wavenet-D">David</option>
          <option value="en-GB-Wavenet-B">Paul</option>
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
          <option value="acoustic">Acoustic</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
