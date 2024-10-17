import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { CarritoContext } from '../../context/CarritoContex'
import { collection,addDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../assets/services/config'
import "./CheckOut.css"
import Swal from 'sweetalert2';






const Checkout = () => {
    const [nombre,setNombre]= useState("")
    const [apellido,setApellido] = useState ("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailEconfirmacion,setEmailConfirmacion]= useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId]=useState("")

    const{carrito,vaciarCarrito,total}= useContext(CarritoContext)

    const manejadorFormulario = (e) =>{
      e.preventDefault()
      if(!nombre || !apellido || !telefono || !email || !emailEconfirmacion){
        setError("porfabor complete todo los campos")
        return;
      }
      const telefonoRegex = /^[0-9]+$/; 
      if (!telefonoRegex.test(telefono)) {
        setError("El teléfono solo debe contener números.");
        return;
      }
      if (!email.includes('@')) {
        setError("El email debe contener un '@'.");
        return;
      }
    
    if (email !== emailEconfirmacion){
      setError("los campos no coinciden")
      return
    }

    const orden = {
      items : carrito.map (producto =>({
        id : producto.item.id,
        nombre : producto.item.nombre,
        cantidad: producto.cantidad
      })),
      total: total,
      fetchAndActivate: new Date(),
      nombre,
      apellido,
      telefono,
      email
    }

    Promise.all(
      orden.items.map(async(productoOrden) =>{
        const productoRef = doc (db,"productos",productoOrden.id)
        const productoDoc = await getDoc(productoRef)
        const stockActual = productoDoc.data().stock
        await updateDoc (productoRef,{
          stock: stockActual - productoOrden.cantidad
        })
      })
    )
    .then(()=>{
      addDoc(collection(db,"ordenes"),orden)
      .then(docRef =>{
        setOrdenId(docRef.id)
        vaciarCarrito()
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
        setError(""); 
        Swal.fire({
          title: '¡Gracias por tu compra!',
          text: `Tu número de orden es: ${docRef.id}`,
          icon: 'success',
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'swal-button-custom' // Clase personalizada
          },
      });
      })
      .catch(error =>{
        console.log("erorr al crear la orden", error);
        setError("se produujo un error")
      })
    })
    .catch((error) =>{
      console.log("no se pudo actualizar el error" , error);
      setError("no se puede actulizar el stock")
    })
  }
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">CheckOut</h2>

      <form onSubmit={manejadorFormulario} className="checkout-form">
        {
          carrito.map(producto =>(
            <div key={producto.item.id} className="checkout-item">
              <p className="producto-info">{producto.item.nombre}</p>
              <p className="producto-nombre">{producto.item.precio} x {producto.cantidad}</p>
              <p>{producto.item.cantidad}</p>
              <hr />
            </div>
          ))
        }
        <div>
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} />

        <label htmlFor="Apellido">Apellido</label>
        <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido} />


        <label htmlFor="Telefono">Telefono</label>
        <input type="text" onChange={(e)=>setTelefono(e.target.value)} value={telefono} />
        
        <label htmlFor="Email">Email</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />

        <label htmlFor="Confirmacion Email">Confirmacion Email</label>
        <input type="text" onChange={(e)=>setEmailConfirmacion(e.target.value)} value={emailEconfirmacion} />
        </div>
        {
          error && <p className="error-message">{error}</p>
        }
        <button type='submit' className="checkout-button" >Confirmar Compra</button>
        {
          ordenId &&(
            <strong className="confirmation-message">Le recordamos que su numero de orden es: {ordenId}</strong>
          )
        }
      </form>
    </div>
  )
}


export default Checkout

