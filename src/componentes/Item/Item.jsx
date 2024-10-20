import React from 'react'
import './Estilo.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio , stock, img}) => {
  return (
    <div className='item-card'>
        <img src={img} alt="nombre" />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>stock : {stock}</p>
        <Link to={`/item/${id}`} >Ver Detalles</Link>
    </div>
  )
}

export default Item
