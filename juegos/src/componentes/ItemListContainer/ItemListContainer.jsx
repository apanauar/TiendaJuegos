import { useState, useEffect } from "react"
import { getProductos,productosCategorias } from "../../asinmock"
import ItemList from "../itemlist/ItemList"
import { useParams } from "react-router-dom"



const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const {idCategoria} = useParams()
useEffect(() =>{
const funcionProductos = idCategoria ? productosCategorias : getProductos;
funcionProductos(idCategoria)
.then(res => setProductos(res))
}, [idCategoria])

  return (
    <>
    <h2 style={{textAlign:"center"}}>Mis Productos</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
