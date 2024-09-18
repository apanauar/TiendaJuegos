import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asinmock'
import ItemDetail from '../Itemdetail/ItemDetail'

const ItemDetailContainer = () => {
    const[producto,setProductos] = useState(null)
    useEffect(()=>{
        getUnProducto(1)
        .then(respuesta => setProductos(respuesta))
    }
    ,[])
  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer
