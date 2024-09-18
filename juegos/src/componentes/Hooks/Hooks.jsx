import React from 'react'
import UseContador from '../../contador/UseContador'



export const Hooks = () => {
    const {contador,incrementar,decrementar} = UseContador(1,10)
  
    return (
        <div>
            <h2>contador</h2>
            <button onClick={decrementar}>restar</button>
            <strong>contador</strong>
            <button onClick={incrementar}>aumentar</button>
        </div>
  )
}

export default Hooks