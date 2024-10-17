
import './Barra.css'
import CarWidget from '../CarWidget/CarWidget';
import {Link,NavLink } from "react-router-dom";



function NavBar() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src="/imagen/NpLogo.png" alt="logo" />
      </Link>
        <nav>
            <ul>
                <li>
                <NavLink to="categoria/Accion">Accion</NavLink>
                </li>
                <li>
                <NavLink to="categoria/Historia">Hisotria</NavLink>
                </li>
                <li>
                  <NavLink to="categoria/Soul">Soul</NavLink>
                </li>
            </ul>
        </nav>
    <CarWidget/>
    </header>
  )
}

export default NavBar

