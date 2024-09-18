import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asinmock'
import ItemDetail from '../Itemdetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[producto,setProductos] = useState(null)
    const {idItem} = useParams()
    useEffect(()=>{
        getUnProducto(idItem)
        .then(respuesta => setProductos(respuesta))
    }
    ,[idItem])
  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer
