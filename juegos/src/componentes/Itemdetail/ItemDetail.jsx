import React from 'react'

const ItemDetail = ({id,nombre,precio,img,description}) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio {precio}</h3>
      <h3>ID:{id}</h3>
      <img src={img} alt={nombre} />
      <p>Descripcion:{description}</p>
    </div>
  )
}

export default ItemDetail
