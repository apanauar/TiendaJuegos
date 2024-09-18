import Item from "./componentes/Item/Item"

const misProductos = [
    {id: "1", nombre:"The last of us", precio: 1200, img:"../imagen/thelastofus.png", idCat:"Historia"},
    {id: "2", nombre:"Black Myth: Wukong", precio: 2200, img:"../imagen/Wokong.jpg", idCat:"Soul"},
    {id: "3", nombre:"Elden Ring", precio: 1200, img:"../imagen/Eldenring.jpg", idCat:"Soul"},
    {id:" 4", nombre:"Red Dead Redemption 2", precio: 1800, img:"../imagen/reddead.jpg", idCat:"Historia"},
    {id: "5", nombre:"God of War Ragnarok", precio: 1600, img:"../imagen/godofwar.jpg", idCat:"Historia"},
    {id: "6", nombre:"GTA V", precio: 1200, img:"../imagen/gta.png", idCat:"Accion"},
    {id:" 7", nombre:"Resident Evil 2 Remake", precio: 1200, img:"../imagen/resident-evil-2-remake.png", idCat:"Historia"},
    {id: "8", nombre:"Alan Wake 2", precio: 1200, img:"../imagen/alanwake.jpg", idCat:"Historia"}
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(misProductos)
        },2000)
    })
}
export const getUnProducto = (id) =>{
    return new Promise (resolve =>{
        setTimeout (()=>{
            const producto = misProductos.find(Item => Item.id === id)
            resolve( producto)
        },200)
    }
    )

}
export const productosCategorias = (idCategoria)=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            const producto = misProductos.filter(item  => item.idCat === idCategoria)
            resolve(producto)
        }
        ,100)
    }
    )
}