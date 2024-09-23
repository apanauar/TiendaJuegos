import Item from "./componentes/Item/Item"

const misProductos = [
    {id: "1", nombre:"The last of us", description: 'The Last of Us es un videojuego de genero Drama, Survival Horror y Acción-Aventura en tercera persona desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment.', precio: 1200, img:"../imagen/thelastofus.png", idCat:"Historia"},
    {id: "2", nombre:"Black Myth: Wukong",description: 'Black Myth: Wukong es un RPG de acción basado en la mitología china y en Viaje al Oeste, una de las cuatro grandes novelas clásicas de la literatura china.', precio: 2200, img:"../imagen/Wokong.jpg", idCat:"Soul", },
    {id: "3", nombre:"Elden Ring",description: 'Es un RPG de fantasía, acción y aventura ambientado en un mundo creado por Hidetaka Miyazaki y George R. R. Martin. El peligro y el descubrimiento están en cada giro del juego más grande de FromSoftware hasta la fecha.', precio: 1200, img:"../imagen/Eldenring.jpg", idCat:"Soul"},
    {id:" 4", nombre:"Red Dead Redemption 2",description: 'Después de que un atraco en el pueblo de Blackwater sale muy mal, Arthur Morgan y la banda Van der Linde se ven obligados a huirse. Con agentes federales y los mejores cazarrecompensas persiguiéndolos, la banda debe robar, atracar y luchar por el duro corazón de Estados Unidos para sobrevivir.', precio: 1800, img:"../imagen/reddead.jpg", idCat:"Historia"},
    {id: "5", nombre:"God of War Ragnarok",description: 'Como sugiere el título, God of War: Ragnarok trata sobre una guerra cataclísmica conocida en la mitología nórdica como Ragnarok . Sin embargo, en esencia, trata mucho más sobre la relación entre un padre y su hijo. Ese padre resulta ser una máquina de matar imparable.', precio: 1600, img:"../imagen/godofwar.jpg", idCat:"Historia"},
    {id: "6", nombre:"GTA V",description: 'En el año 2004, Michael Townley, Trevor Philips y Brad Snider eran ladrones de bancos que vivían en Ludendorff, en el estado de North Yankton (basado en Dakota del Norte). Michael, queriendo huir de esa vida, planea un atraco falso junto al agente federal corrupto Dave Norton.', precio: 1200, img:"../imagen/gta.png", idCat:"Accion"},
    {id:" 7", nombre:"Resident Evil 2 Remake",description: 'El jugador controla al policía novato Leon S. Kennedy y a la estudiante universitaria Claire Redfield, quienes deben escapar de Raccoon City después de que sus ciudadanos se transformaran en zombis por un arma biológica dos meses después de los eventos del Resident Evil original.', precio: 1200, img:"../imagen/resident-evil-2-remake.png", idCat:"Historia"},
    {id: "8", nombre:"Alan Wake 2",description: 'Alan Wake, un escritor perdido y atrapado en una pesadilla más allá de este mundo, escribe una oscura historia para dar forma a la realidad en un desesperado intento por escapar. Asediado por un insaciable horror, Wake lucha por mantener la cordura y vencer al diablo a su propio juego.', precio: 1200, img:"../imagen/alanwake.jpg", idCat:"Historia"}
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