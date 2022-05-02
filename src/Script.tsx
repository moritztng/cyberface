import './Script.css';

function Script(props: { value: string; onChange: Function; }) {
  return <textarea className="Script" value={props.value} onChange={(event) => props.onChange(event.target.value.substring(0, 500))} />;
}

export default Script;
