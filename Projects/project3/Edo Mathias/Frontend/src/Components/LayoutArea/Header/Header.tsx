import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import logo from './EldenTrips.png'
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <img src={logo} width={75} />
            <h1>Elden Trips</h1>
            <AuthMenu />
        </div>
    );
}

export default Header;
