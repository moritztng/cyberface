import './Header.css';
import logo from './assets/images/logo256.png';

function Header(props: { downloadUrl: string; }) {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="logo" />
      <a className="Download-button" href={props.downloadUrl + '?response-content-disposition=attachment'}>
        Download
      </a>
    </div>
  );
}

export default Header;
