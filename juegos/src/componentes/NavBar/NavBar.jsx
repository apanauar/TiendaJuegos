
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget';
import {Link,NavLink } from "react-router-dom";



function NavBar() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src="./imagen/Logo.jpg" alt="logo" />
      </Link>
        <nav>
            <ul>
                <li>
                <NavLink to="/">Todos</NavLink>
                </li>
                <li>
                <NavLink to="/Accion">Accion</NavLink>
                </li>
                <li>
                <NavLink to="/Historia">Hisotria</NavLink>
                </li>
                <li>
                  <NavLink to="/Soul">Soul</NavLink>
                </li>
            </ul>
        </nav>
    <CarWidget/>
    </header>
  )
}

export default NavBar

