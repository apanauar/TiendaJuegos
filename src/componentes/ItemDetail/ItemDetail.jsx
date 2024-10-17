import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContex'
import { useContext } from 'react'
import Counter from "../Contador/Counter"
import "./ItemDetail.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const ItemDetail = ({id,nombre,precio,img,description,stock,}) => {

  const [agregarCantidad,setAgregarCantidad]= useState(0)
  const{agregarAlCarrito} =useContext(CarritoContext)
  const manejarCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad)
    const item = {id,nombre,precio}
    agregarAlCarrito(item,cantidad)
    toast.success(`${nombre} agregado al carrito!`, {
      autoClose: 3000,
    });
  }


  return (
    <div className='item-detail'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: ${precio}</h3>
      <img src={img} alt={nombre} />
      <p>Descripcion:{description}</p>
      {
        agregarCantidad > 0?(<Link to="/cart" className="linkeado">terminar de comprar</Link>) :(<Counter inicial={1} stock={stock} funcionAgregar={manejarCantidad}/>)
      }
    </div>
  )
}

export default ItemDetail
