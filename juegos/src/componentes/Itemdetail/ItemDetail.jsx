import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../contador/contador'



const ItemDetail = ({id,nombre,precio,img,description,stock}) => {

  const [agregarCantidad,setAgregarCantidad]= useState(0)
  const manejarCantidad = (cantiad)=>{
    setAgregarCantidad(cantiad)
  }


  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio {precio}</h3>
      <h3>ID:{id}</h3>
      <img src={img} alt={nombre} />
      <p>Descripcion:{description}</p>
      {
        agregarCantidad > 0?(<Link to="/cart">terminar de comprar</Link>) :(<Contador inicial={1} stock={stock} funcionAgregar={manejarCantidad}/>)
      }
    </div>
  )
}

export default ItemDetail
