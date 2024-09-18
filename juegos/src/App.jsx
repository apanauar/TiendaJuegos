
import './App.css'
import ItemDetailContainer from './componentes/Itemdetailcontainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Historia from './componentes/Historia/Historia'
import Soul from './componentes/Soul/Soul'
import Accion from './componentes/Accion/Accion'
import Todos from './componentes/Todos/Todos'


function App() {
  return (
  <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/Historia" element={<Historia/>}/>
    <Route path="/Soul" element={<Soul/>}/>
    <Route path="/Accion" element={<Accion/>}/>
    <Route path="/" element={<Todos/>}/>
  </Routes>
  </BrowserRouter>
  <ItemListContainer/>
  <ItemDetailContainer/>
  </>
  )
}


export default App
