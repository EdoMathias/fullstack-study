import { NavLink } from "react-router-dom";
import "./Menu.css";
import { appStore } from "../../../Redux/Store";

function Menu(): JSX.Element {

    return <div className="Menu">
        <NavLink to="/list">List</NavLink>
        <NavLink to="/new">New</NavLink>
    </div>
}

export default Menu;
