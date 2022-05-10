import './Header.css';
import logo from './assets/images/logo256.png';

function Header(props: { downloadUrl: string; }) {
  return (
    <div className="Header">
      <a className="Logo" href="https://cyberstudio.app">
        <img src={logo} alt="logo" />
      </a>
      <a className="Download-button" href={props.downloadUrl}>
        Download
      </a>
    </div>
  );
}

export default Header;
