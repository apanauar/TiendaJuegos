import { useState, useEffect } from "react";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../assets/services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
    
  }, [idCategoria]);

  return (
    <>
      {loading ? <p>Cargando...</p> : <ItemList productos={productos} />}
    </>
  );
};

export default ItemListContainer;



