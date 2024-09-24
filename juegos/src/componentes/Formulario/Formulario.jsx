import React, { useState } from 'react'

const Formulario = () => {
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const  [email,setEmail]=useState("")
    
    const usarFomrulario = (e)=>{
        e.preventDeFault()
        const NuevoCliente = {nombre,apellido,email};
        console.log(NuevoCliente);
        
        
        setNombre("")
        setApellido("")
        setEmail("")

    }

   return (
    <form onSubmit={usarFomrulario} >
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
        <br />
        <br />
        <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido} />
        <br />
        <br />
        <label htmlFor="">Correo Electronico</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <br />
        <br />
        <button>enviar datos</button>
    </form>
  )
}

export default Formulario
