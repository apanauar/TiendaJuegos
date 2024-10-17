
import "./CarWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContex"
import { Link } from "react-router-dom"

function CarWidget() {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div className="carrito">
      <Link to="/Cart">
      <img className="imgCarrito" src="../imagen/carrito.png" alt="Carrito" />
      </Link>
      {
        cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
      }
    </div>
    )

}

export default CarWidget

