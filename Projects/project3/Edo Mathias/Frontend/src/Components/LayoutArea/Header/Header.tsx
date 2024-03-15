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
        <h1>
          <a>E</a>
          <a>lden trip</a>
          <a>S</a>
        </h1>
      </div>
      <div className="auth-container">
        <AuthMenu />
      </div>
    </div>
  );
}

export default Header;
