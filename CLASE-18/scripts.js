/* 
DOM Document Object Model
*/

/* 
console.dir(document)
*/

const titulo = document.getElementById('titulo');
console.dir(titulo.innerText)

titulo.innerText = 'Hola'

const caja = document.getElementById('caja-producto')

console.dir(caja)

caja.innerHTML = '<h2>Soy un subtitulo</h2>'

/* 
const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/

const usuario = {
    nombre: 'Gaston',
    apellido: 'Riecan',
    direccion: 'Falco 3222',
    edad: 37
}

usuarioo = document.getElementById('usuario')

usuarioo.innerHTML = `
<h2>Nombre completo: ${usuario.nombre}${usuario.apellido}</h2>
<span>Edad: ${usuario.edad}</span>
<span>Direccion: ${usuario.direccion}</span>
`

const productos = [
    {
        nombre: 'tv Samsung',
        id: 1,
        precio: '$500',
        descripcion: 'lalala',
        imagen: 'epepe'
    },
    {
        nombre: 'tv Samsung',
        id: 1,
        precio: '$500',
        descripcion: 'lalala',
        imagen: 'epepe'
    },
    {
        nombre: 'tv Samsung',
        id: 1,
        precio: '$500',
        descripcion: 'lalala',
        imagen: 'epepe'
    },
    {
        nombre: 'tv Samsung',
        id: 1,
        precio: '$500',
        descripcion: 'lalala',
        imagen: 'epepe'
    },
]


const productosHTML = document.getElementById('productos')


let plantillaProductos = ''
for(const producto of productos) {
    plantillaProductos = plantillaProductos  + `
    <div>
        <h2>${producto.nombre}</h2>
        <img width='200px' src="${producto.thumbnail}"/>
        <span>Precio: ${producto.precio}</span>
        <p>${producto.descripcion}</p>
        <button>Comprar</button>
    </div>
    
    `
}
