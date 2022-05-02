import './Settings.css';
import { AudioSettings, VideoSettings } from './Utils'; 

const defaultVoiceSettings: { [voice: string]: { pitch: string; speed: string; }; } = {
  'en-GB-Wavenet-F': {pitch: '-4.0', speed: '0.85'},
  'en-US-Wavenet-F': {pitch: '0', speed: '0.9'},
  'en-US-Wavenet-E': {pitch: '0', speed: '0.9'},
  'en-US-Wavenet-B': {pitch: '-5.0', speed: '0.9'},
  'en-GB-Wavenet-D': {pitch: '0', speed: '0.85'},
  'en-GB-Wavenet-B': {pitch: '-5.0', speed: '0.85'}
}
const defaultMusicSettings: { [music: string]: { volume: string; }; } = {
  'interstellar': {volume: '-10.0'},
  'acoustic': {volume: '7.0'},
  'none': {volume: '0.0'}
}

function Settings(props: { audio: AudioSettings; video: VideoSettings; onAudioChange: Function; onVideoChange: Function; }) {
  return (
    <div className="Settings">
      <div className="Row">
        <label htmlFor="scene">Scene</label>      
        <select id="scene" value={props.video.scene} onChange={(event) => props.onVideoChange({...props.video, scene: event.target.value})}>
          <option value="space">Space</option>
          <option value="fluid">Fluid</option>
        </select>
      </div>
      <div className="Row">
        <label htmlFor="voice">Voice</label>      
        <select id="voice" value={props.audio.voice} onChange={(event) => props.onAudioChange({...props.audio, voice: event.target.value, ...defaultVoiceSettings[event.target.value]})}>
          <option value="en-GB-Wavenet-F">Ada</option>
          <option value="en-US-Wavenet-F">Mary</option>
          <option value="en-US-Wavenet-E">Lisa</option>
          <option value="en-US-Wavenet-B">James</option>
          <option value="en-GB-Wavenet-D">David</option>
          <option value="en-GB-Wavenet-B">Paul</option>
        </select>
      </div>
      {props.audio.music !== 'none' && 
        <div className="Row">
          <label htmlFor="volume">Volume</label>
          <div className="Range">
            <input type="range" id="volume" min="-20" max="20" step="1" value={props.audio.volume} onChange={(event) => props.onAudioChange({...props.audio, volume: event.target.value})} />
            <span>{props.audio.volume}</span>
          </div>
        </div>
      }
      <div className="Row">
        <label htmlFor="pitch">Pitch</label>
        <div className="Range">
          <input type="range" id="pitch" min="-20" max="20" step="1" value={props.audio.pitch} onChange={(event) => props.onAudioChange({...props.audio, pitch: event.target.value})} />
          <span>{props.audio.pitch}</span>
        </div>     
      </div>
      <div className="Row">
        <label htmlFor="speed">Speed</label>
        <div className="Range">
          <input type="range" id="speed" min="0.25" max="4" step="0.05" value={props.audio.speed} onChange={(event) => props.onAudioChange({...props.audio, speed: event.target.value})} />
          <span>{props.audio.speed}</span>
        </div>
      </div>
      <div className="Row">
        <label htmlFor="music">Music</label>      
        <select id="music" value={props.audio.music} onChange={(event) => props.onAudioChange({...props.audio, music: event.target.value, ...defaultMusicSettings[event.target.value]})}>
          <option value="interstellar">Interstellar</option>
          <option value="acoustic">Acoustic</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
