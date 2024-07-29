import  productos  from "../data/productos.js"

export const obtenerProductoPorId = (id) => {
    return productos.find(producto => Number(producto.id) === Number(id))
}

/**
 * Retrieves saved products from local storage. If no products are found, saves the current products to local storage.
 *
 * @return {Array} Parsed array of products
 */
export const obtenerProductos = () => {
    const productos_guardados = localStorage.getItem('productos')
    if (productos_guardados) {
        return JSON.parse(productos_guardados)
    } else {
        const productos_JSON = JSON.stringify(productos)
        localStorage.setItem('productos', productos_JSON)
        return productos
    }
}

/* 
crearProducto(producto) lo guarda en el localStorage con la key 'productos'
obtenerProductosPorId(id) retorna el producto que cumpla con ese id
eliminar productoPorId(id) elimina el producto que cumpla con ese id 
*/



export const crearProducto = (producto) => {
    const lista_productos = obtenerProductos()
    lista_productos.push(producto)
    const productos_JSON = JSON.stringify(lista_productos)
    localStorage.setItem('productos', productos_JSON)
}

export const obtenerProductosPorId = (id) => {
    const productos_guardados = localStorage.getItem('productos')
    const productos_actuales = JSON.parse(productos_guardados)
    const producto = productos_actuales.find(producto => {
        return Number(producto.id) === Number(id)
    })
    return producto;
}

export const eliminarProductoPorId = (id) => {
    const lista_productos = obtenerProductos()
    const nueva_lista = lista_productos.filter(producto => Number(producto.id) !== Number(id))
    guardarProductos(nueva_lista)
}

export const guardarProductos = (productos) => {
    const productos_JSON = JSON.stringify(productos)
    localStorage.setItem('productos', productos_JSON)
}

/* 
El detalle del componente Detail.jsx ahora debe venir de obtenerProductoPorId(id)(HECHO)

Van a crear un boton en la vista de Detail.jsx que se llamara 'eliminar' y al hacer click se ejecuta la funcion
eliminarProductoPorId(id)(HECHO)

La lista de productos que se mostrara en el componente Home.jsx sera dada a partir de la funcion obtenerProductos()(HECHO)

Crear una nueva screen/page/route llamada '/product/new' renderizara un formulario donde se le solicitara al usuario
informacion del producto:
nombre: string,
descripcion: string, mas de 10 caracteres,
precio: number psitivo distinto de 0,
stock: numero positivo distinto de 0,
codigo: string,
categoria: string,
thumbnail: string(HECHO)

TODAVIA no es necesario validaciones o capturas de dato, PERO si es necesario el Form en HTML
*/

/* 
mook = [
    {
        contact_id: 1,
        messages: [
            {
                text: 'lorem',
                time: 'hoy'
                author: 'pepe',
                id:1
            }
        ]
    },
    {
        contact_id: 2,
        messages: [
            {
                text: 'lorem',
                time: 'hoy'
                author: 'pepe',
                id:1
            }
        ]
    }
]
*/