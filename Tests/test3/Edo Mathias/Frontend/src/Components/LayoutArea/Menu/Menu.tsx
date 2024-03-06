import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <NavLink to="/list">List</NavLink>
      <NavLink to="/new">New</NavLink>
    </div>
  );
}

export default Menu;
