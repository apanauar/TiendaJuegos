
import './App.css'
import ItemDetailContainer from './componentes/Itemdetailcontainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { CarritoProvider } from './context/CarritoContex'
import Cart from './componentes/cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
  <>
  <BrowserRouter>
  <CarritoProvider>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
    <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
    <Route path='/Cart' element={<Cart></Cart>}></Route>
    <Route path='/checkOut' element={<Checkout/>}></Route>
  </Routes>
  <ToastContainer /> 
  </CarritoProvider>
  
  </BrowserRouter>
  </>
  
  )
}


export default App
