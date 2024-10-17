import React, { useState } from 'react'
import { db } from '../../assets/services/config'
import { collection,addDoc } from 'firebase/firestore'

const Formulario = () => {
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const  [email,setEmail]=useState("")
    const [telefono,setTelefono]=useState("")
    
    const usarFomrulario = (e)=>{
        e.preventDefault()
            addDoc(collection(db,"usuario"),{
                nombre:nombre,
                apellido: apellido,
                telefono: telefono,
                email:email
            })
        setApellido("");
        setEmail("");
        setNombre("");
        setTelefono("");
    }

   return (
    <form onSubmit={usarFomrulario} >
        <h2>Formulario de contacto</h2>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
        <br />
        <br />

        <label htmlFor="Apellido">Apellido</label>
        <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido} />
        <br />
        <br />

        <label htmlFor="Correo Electronico">Correo Electronico</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <br />
        <br />

        <label htmlFor="Telefono">Telefono</label>
        <input type="text" onChange={(e)=>setTelefono(e.target.value)} value={telefono} />

        <button type='submit'>enviar datos</button>
    </form>
  )
}

export default Formulario
