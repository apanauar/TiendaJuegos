import React from 'react'
import Item from '../Item/Item'
import './Cards.css'

const ItemList = ({productos}) => {
  return (

    <div className='contenedorProductos'>
        {productos.map(item =><Item key={item.id}{...item}/>)}
    </div>
  )
}

export default ItemList
