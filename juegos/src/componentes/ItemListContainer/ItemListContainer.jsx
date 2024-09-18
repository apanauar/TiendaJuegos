import { useState, useEffect } from "react"
import { getProductos } from "../../asinmock"
import ItemList from "../itemlist/ItemList"
import Hooks from "../hooks/Hooks"




const ItemListContainer = () => {
const [productos, setProductos] = useState([])
useEffect(() =>{
  getProductos ()
  .then(respuesta => setProductos(respuesta))
  .catch(error => console.log(error))
}, [])
 
  return (
    <>
    <h2 style={{textAlign:"center"}}>Mis Productos</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
