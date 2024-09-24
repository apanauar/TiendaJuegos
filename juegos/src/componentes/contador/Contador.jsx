import React, { useState } from 'react'

const Contador = ({inicial,stock,funcionAgregar}) => {


    const [contador,setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock)
            setContador(contador +1)
    }
    const restaContador = () =>{
        if (contador > inicial)
            setContador(contador -1)
    }

  return (
    <> 
    <button onClick={restaContador}>-</button>
    <strong>{contador}</strong>
    <button onClick={sumarContador}>+</button>
    <button onClick={()=>funcionAgregar(contador)}>Agregar al Carrito</button>






    </>
  )
}

export default Contador
