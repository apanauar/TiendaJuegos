import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContex'
import { Link } from 'react-router-dom'
import CarItem from '../CarItem/CarItem'
import "./cart.css"

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="cart-empty">No se encuentran productos en el carrito</h2>
                <Link to="/" className="cart-link">Ver Productos</Link>
            </>
        )
    }

    return (
        <div className="cart-container">
            <h2 className="cart-header">Tu Carrito</h2>
            <div className="cart-items">
                {
                    carrito.map(producto => (
                        <div className="cart-item" key={producto.item.id}>
                            <p className="product-name">{producto.item.nombre}</p>
                            <p className="product-price">${producto.item.precio}</p>
                            <p className="product-quantity">Cantidad: {producto.cantidad}</p>
                        </div>
                    ))
                }
            </div>
            <div className="cart-summary">
                <h3 className="cart-total">Total: ${total}</h3>
                <h3 className="cart-quantity">Cantidad Total: {cantidadTotal}</h3>
                <button className="cart-button" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                <Link to="/CheckOut" className="checkout-link">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart

