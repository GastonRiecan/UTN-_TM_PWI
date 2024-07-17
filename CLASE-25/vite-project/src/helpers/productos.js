import  productos  from "../data/productos.js"

export const obtenerProductoPorId = (id) => {
    return productos.find(producto => Number(producto.id) === Number(id))
}