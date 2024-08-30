


import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css';  

function NavBar() {
  return (
    <header>
    <div className="navbar">
    <h1 className="navbar-title">ApaStore</h1>
        <nav>
            <ul>
                <li><a href="#todos">Todos los Juegos</a></li>
                <li><a href="#accion">Accion</a></li>
                <li><a href="#historia">Historia</a></li>
                <li><a href="#souls">Souls</a></li>
            </ul>
        </nav>
    </div>
    <CarWidget/>
    </header>
  )
}

export default NavBar;



