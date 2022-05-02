import './Viewport.css';
import Video from './Video';
import Loading from './Loading';
import Error from './Error';

function Viewport(props: { videoSrc: string; animating: string; }) {
  let element;
  if (props.animating === 'finished' && props.videoSrc) {
    element = <Video src={props.videoSrc} />;
  } else if (props.animating === 'loading') {
    element = <Loading text="Loading.." />;
  } else if (props.animating === 'server error') {
    element = <Error text="Too many people are using the service.. Try again later!" />;
  } else if (props.animating === 'client error') {
    element = <Error text="Could not connect to the service.. Check your internet connection or try again later!" />;
  }

  return <div className="Viewport">{element}</div>;
}

export default Viewport;
