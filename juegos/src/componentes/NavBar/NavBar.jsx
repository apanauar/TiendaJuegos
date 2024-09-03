
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget';

function NavBar() {
  return (
    <header>
        <h1>NappaGames</h1>
        <nav>
            <ul>
                <li>Todos</li>
                <li>Accion</li>
                <li>Hisotria</li>
                <li>Soul</li>
            </ul>
        </nav>
      <CarWidget/>
    </header>
  )
}

export default NavBar
