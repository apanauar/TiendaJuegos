import React from 'react'

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio {precio}</h3>
      <h3>ID:{id}</h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus nemo quasi, eaque aspernatur culpa eligendi nobis, earum iure commodi rem totam porro ipsum, vitae sint eius. Dolorem, aut ipsa.</p>
    </div>
  )
}

export default ItemDetail
