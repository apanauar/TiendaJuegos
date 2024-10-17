import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContex'
import ItemDetail from '../ItemDetail/ItemDetail'


const CarItem = ({item,cantidad,}) => {
    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad : {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={()=> eliminarProducto (item.id)}>Eliminar Producto</button>
      
    </div>
  )
}

export default CarItem
