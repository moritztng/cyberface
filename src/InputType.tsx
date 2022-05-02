import './InputType.css';

function InputType(props: { type: string; onSelect: Function; }) {
  return (
    <div className="Input-type">
      <span className={props.type === 'script' ? 'Selected' : undefined} onClick={() => props.onSelect('script')}>Script</span>
      <span className={props.type === 'settings' ? 'Selected' : undefined} onClick={() => props.onSelect('settings')}>Settings</span>
    </div>
  );
}

export default InputType;
