import './Error.css';

function Error(props: { text: string; }) {
  return <div className="Error">{props.text}</div>;
}

export default Error;
