import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">Welcome</NavLink>
      <NavLink to="/portfolio">Porfolio</NavLink>
      <NavLink to="/about-me">About Me</NavLink>
      {/* <NavLink to="/cube">Cube</NavLink> */}
    </nav>
  )
}

export default Navigation;
