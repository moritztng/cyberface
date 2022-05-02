import './Body.css';
import Input from './Input';
import Viewport from './Viewport';

function Body(props: { videoSrc: string; speaking: boolean; animating: string; onListen: Function; onAnimate: Function; }) {
  return (
    <div className="Body">
      <div className="Content">
        <Input speaking={props.speaking} animating={props.animating} onListen={props.onListen} onAnimate={props.onAnimate} />
        <Viewport videoSrc={props.videoSrc} animating={props.animating} />
      </div>
    </div>
  );
}

export default Body;
