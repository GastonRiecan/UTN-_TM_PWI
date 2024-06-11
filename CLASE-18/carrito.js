

/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/




const producto = [
    {
        nombre: 'Pelota-futbol',
        id: 1,
        precio: 500,
        cantidad: 2,
        img: 'https://tiotomar.vtexassets.com/arquivos/ids/177864-800-800?v=638014197905000000&width=800&height=800&aspect=true'
    },
    {
        nombre: 'Guante-boxeo',
        id: 2,
        precio: 300,
        cantidad: 12,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WMwMI3iBYo7dqV7RwqpCNMwpxAfF8J-ryA&s'
    },
    {
        nombre: 'Palo-golf',
        id: 3,
        precio: 1000,
        cantidad: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxphnRZW1knf94M8vYEoUytcpU1iq1RgNvkw&s'
    },
    {
        nombre: 'Raqueta-tenis',
        id: 4,
        precio: 700,
        cantidad: 6,
        img: 'https://www.wilsonstore.com.ar/cdn/shop/products/8ee62bbd-1974-4940-a818-322bc5c062ee_1500x.jpg?v=1692194053'
    },
    {
        nombre: 'Botin-futbol',
        id: 5,
        precio: 2000,
        cantidad: 4,
        img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/107166/01/sv01/fnd/ARG/fmt/png'
    },
    {
        nombre: 'Canillera-hockey',
        id: 6,
        precio: 600,
        cantidad: 8,
        img: 'https://acdn.mitiendanube.com/stores/002/216/488/products/canilleras-voodo-rosa-azul1-91b6747e2e2dfbd57416691679779124-640-0.jpg'
    },
]



/* 
Crear una funcion llamada renderizarCarrito(carrito) y ejecutara toda la logica de crear la plantilla y mostrarla en HTML
*/

const renderizarCarrito = () => {
    const productosCarrito = document.getElementById('productos')

    let plantillaProductos = ''
    let valorTotal = 0
    for (const product of producto) {
        plantillaProductos = plantillaProductos + `
        <div>
            <h3>${product.nombre} #${product.id}</h3>
            <img width='100px' src="${product.img}"/><br>
            <span>Cantidad: ${product.cantidad}</span><br>
            <span>Precio Unitario: $${product.precio}</span><br>
            <span>Precio Total: $${product.precio * product.cantidad} </span>
        </div>
        `
        valorTotal = valorTotal + (product.precio * product.cantidad)
        console.log(valorTotal);
    }
    productosCarrito.innerHTML = plantillaProductos

    const total = document.getElementById('total')
    total.innerText = `TOTAL: $ ${valorTotal}`
}

//renderizarCarrito()

/* 
Por debajo del div donde renderizamos el carrito, crear en HTML un span que este vacio
Llamar dicho span por JS y cambiar el texto para que diga: TOTAL: ${precio total}
*/
/* Find nos permite buscar un elemento en un array de objetos */


const eliminaItemPorId = (id) => {
    const itemBuscado = producto.find((item) => {
        return item.id === id
    })
    console.log(itemBuscado);

    if (itemBuscado) {
        if (itemBuscado.cantidad === 1) {
            //console.log('pepe');
            //eliminar item del array
            const posicionItem = producto.findIndex((item) => {
                return item.id === id
            })
            producto.splice(posicionItem, 1)

        } else {
            //decrementar la cantidad
            //console.log('pepe');

            itemBuscado.cantidad = itemBuscado.cantidad - 1;
            console.log('pepe');
        }
        renderizarCarrito(producto)
    } else {
        console.log('Error, item con id inexsistente');
    }
    console.log(itemBuscado);
}

/* 
Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1
*/

const agregarItemAlCarrito = (item) => {
    const itemBuscado = producto.find((prod) => {
        return prod.id === item.id
    })
    console.log(itemBuscado);

    if (itemBuscado) {
        // incrementaran su cantidad en 1
        itemBuscado.cantidad += 1;
        renderizarCarrito()
    } else {
        //Agregar al array de productos, con la propiedad cantidad en 1
        item.cantidad = 1
        producto.push(item)
    }
    renderizarCarrito()
}

const camiseta = {
    nombre: 'Camiseta-futbol',
    id: 20,
    precio: 25000,
    img: 'https://img.planetafobal.com/2023/10/independiente-camiseta-2023-2024-puma-zavh.webp'
}
const botinFutbol = {
    nombre: 'botin-futbol',
    id: 5,
    precio: 25000,
    img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/107166/01/sv01/fnd/ARG/fmt/png'
}


agregarItemAlCarrito(botinFutbol)
agregarItemAlCarrito(botinFutbol)
agregarItemAlCarrito(camiseta)
agregarItemAlCarrito(camiseta)
