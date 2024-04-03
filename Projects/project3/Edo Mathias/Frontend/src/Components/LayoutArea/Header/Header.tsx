import AuthMenu from '../../AuthArea/AuthMenu/AuthMenu';
import logo from '../../../Assets/Images/EldenTrips.png';
import './Header.css';

function Header(): JSX.Element {
  return (
    <div className="Header">
      <div className="image-container">
        <img src={logo} />
      </div>
      <div className="title-container">
        <h1 className="site-title">ELDEN TRIPS</h1>
      </div>
      <div className="auth-container">
        <AuthMenu />
      </div>
    </div>
  );
}

export default Header;
