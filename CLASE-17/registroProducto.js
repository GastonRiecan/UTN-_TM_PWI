/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola

*/

const validaTitulo = () => {
    let titulo = prompt('Ingrese un titulo: ')
    while (!titulo || titulo.length <= 4 || !isNaN(titulo)) {
        alert("El titulo debe tener mas de 4 caracteres")
        titulo = prompt('Ingrese un titulo: ')
    }
    return titulo
}

const validaPrecio = () => {
    let precio = prompt('Ingrese un precio: ')
    while (!precio || precio < 1 || isNaN(precio)) {
        alert("El precio debe ser un numero positivo mayor a 1")
        titulo = prompt('Ingrese un precio: ')
    }
    return precio
}

const validaDescripcion = () => {
    let descripcion = prompt('Ingrese un descripcion: ')
    while (!descripcion || descripcion.length <= 10 || !isNaN(descripcion)) {
        alert("El descripcion debe tener mas de 4 caracteres")
        descripcion = prompt('Ingrese un descripcion: ')
    }
    return descripcion
}

const validaCategoria = () => {
    let categoria = prompt('Ingrese un categoria: ')
    let categorias = ['tecnologia', 'hogar', 'otros']
    while (!categorias.includes(categoria)) {
        alert("Categoria no valida")
        categoria = prompt('Ingrese un categoria: ')
    }
    return categoria
}

const validaMarca = () => {
    let marca = prompt('Ingrese un marca: ')
    while (!marca || marca.length <= 3 || !isNaN(marca)) {
        alert("El marca debe tener mas de 4 caracteres")
        marca = prompt('Ingrese un marca: ')
    }
    return marca
}

const validarNegacion = (confirmacion) => confirmacion === null || confirmacion.toLowerCase() === 'cancelar' || confirmacion.toLowerCase() === 'no'



const registraProducto = () => {
    let titulo = validaTitulo()
    let precio = validaPrecio()
    let descripcion = validaDescripcion()
    let categoria = validaCategoria()
    let marca = validaMarca()

    let producto = `'Confirmar producto? :' 
    -Titulo: ${titulo}'
    -Precio: ${precio}
    -Descripcion: ${descripcion}
    -Categoria: ${categoria}
    -Marca: ${marca} `

    let confirmacion = prompt(producto)

    if(validarNegacion(confirmacion)){
        registraProducto()
    }
    else{
        const productoConfirmado = {
            titulo,
            precio,
            descripcion,
            categoria,
            marca
        }
        console.log(productoConfirmado)

    }


}


registraProducto()


/* 
const categoriasDisponibles = ['tecnologia', 'hogar', 'otros']

const validarStringConMinimo = (valor, minimo) => valor && isNaN(valor) && valor.length >= minimo 
const validarTitulo = (valor) => validarStringConMinimo(valor, 4)
const validarPrecio = (valor) => valor && !isNaN(valor) && valor > 1
const validarDescripcion = (valor) => validarStringConMinimo(valor, 10)
const validarCategoria = (valor) => categoriasDisponibles.includes(valor)
const validarMarca = (valor) => validarStringConMinimo(valor, 3)
const validarNegacion = (confirmacion) => confirmacion === null || confirmacion.toLowerCase() === 'cancelar' || confirmacion.toLowerCase() === 'no'


const crearObjetoConfeccion  = (mensaje, error, validacion) =>{
    return {
        mensaje: mensaje,
        error: error, 
        validacion: validacion
    }
}

const DATOS_PRODUCTO = {
    TITULO: crearObjetoConfeccion(
        'Ingrese un titulo min (4) caracteres:',
        'Error al ingresar titulo, ingrese nuevamente:',
        validarTitulo
    ),
    PRECIO: crearObjetoConfeccion(
        'Ingrese un precio positivo mayor a $1',
        'Error al ingresar precio, ingrese nuevamente',
        validarPrecio
    ),
    DESCRIPCION: crearObjetoConfeccion(
        'Ingrese una descripcion min (10) caracteres',
        'Error al ingresar descripcion, ingrese nuevamente',
        validarDescripcion
    ),
    CATEGORIA:crearObjetoConfeccion(
        'Ingrese una caregoria valida (categorias validas: ' + categoriasDisponibles.join(', ') +')',
        'Error al ingresar una categoria, (categorias validas: ' + categoriasDisponibles.join(', ') +')', 
        validarCategoria
    ),
    MARCA: crearObjetoConfeccion(
        'Ingrese una marca min (3) caracteres',
        'Error al ingresar marca, ingrese nuevamente',
        validarMarca
    ),
} 

const solicitarDato = (objetoDeConfeccion) => {

    let dato = prompt(objetoDeConfeccion.mensaje)
    while(!objetoDeConfeccion.validacion(dato)){
        dato = prompt(objetoDeConfeccion.error)
    }
    return dato
}


const registrarProducto = () => {


    let titulo = solicitarDato(DATOS_PRODUCTO.TITULO)
    let precio = solicitarDato(DATOS_PRODUCTO.PRECIO)
    let descripcion = solicitarDato(DATOS_PRODUCTO.DESCRIPCION)
    let categoria = solicitarDato(DATOS_PRODUCTO.CATEGORIA)
    let marca = solicitarDato(DATOS_PRODUCTO.MARCA)

    let mensajeConfirmacion = `
    Esta seguro de confirmar el producto:
    Titulo: ${titulo}
    Precio: ${precio}
    Descripcion: ${descripcion}
    Categoria: ${categoria}
    Marca: ${marca}
    `
    let confirmacion = prompt(mensajeConfirmacion)
    if(validarNegacion(confirmacion)){
        registrarProducto()
    }
    else{
        const producto = {
            titulo,
            precio,
            descripcion,
            categoria,
            marca
        }
        console.log(producto)
    }
}


registrarProducto()





/* CODIGO MEJORADO DEL PROFESOR CON FOR IN PARA RECORRER EL OBJETO DATOS.

const registrarProducto = () => {
    
    const producto = {}
    for (let propiedad in DATOS_PRODUCTO){
        let dato = solicitarDato(DATOS_PRODUCTO[propiedad])
        producto[propiedad.toLowerCase()] = dato
    }



    let mensajeConfirmacion = `
    Esta seguro de confirmar el producto:
    Titulo: ${producto.titulo}
    Precio: ${producto.precio}
    Descripcion: ${producto.descripcion}
    Categoria: ${producto.categoria}
    Marca: ${producto.marca}
    `
    let confirmacion = prompt(mensajeConfirmacion)
    if(validarNegacion(confirmacion)){
        registrarProducto()
    }
    else{
        console.log(producto)
    }
}


registrarProducto() */

