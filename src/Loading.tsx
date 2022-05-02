import fluid from './assets/images/fluid.jpg';
import space from './assets/images/space.jpg';
import './Loading.css';

function Loading(props: { text: string; }) {
  return (
    <div className="Loading">
      <div className="Images">
        <img src={fluid} alt="fluid" />
        <img src={space} alt="space" />
      </div>
      <div className="Loading-text">{props.text}</div>
    </div>
  );
}

export default Loading;
