/*  TIPOS DE DATOS OBJETOS */

/* let edadUsuario = 19;

let nombreDeUsuario = 'Pepe';

let apellidoUsuario = 'lala';

let usuario = {
    'edad': 19,
    'nombre': 'pepe',
    'apellido': 'lala'
}

console.log(usuario);

let producto = {
    precio: 200000,
    nombre: 'automivil',
    marca: 'ford',
    id: 5,
    descripcion: 'sedan de 4 puertas'
} */

/* 
Usamos comillas cuando en el nombre de la propiedad hay espacios, tildes, ñ, -.
*/

/* Accedemos a las propiedades por notacion de corchetes, ej.: producto[marca] */
/* 



console.log('El usuario ' + user['name'] +' '+ user['lastName'] + ' tiene las preferencias de usuario en: \n' + 'Modo: ' + 
user['user preferences']['theme'] + '\nLenguaje: ' +  user['user preferences']['lang']); */

/* TEMPLATE STRINGS */
const user = {
    name: 'pepe',
    lastName: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created at': '18/03/1987',
        'adress': 'ggg 555',
        tel: '4513113151531'
    }
}   

console.log(`El usuario: ${user['name']} ${user['lastName']} tiene las preferencias en:
-Modo: ${user['user preferences']['theme']}
-Lenguaje: ${user['user preferences']['lang']}
`);

/* Pasar nuestro mensaje a notacion de punto */


console.log(`El usuario: ${user.name} ${user.lastName} tiene las preferencias en:
-Modo: ${user['user preferences'].theme}
-Lenguaje: ${user['user preferences'].lang}
`);


/* Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}
*/
const calcularIva = (precio, tipo_factura) => {
    let iva = 21;
    const precioConIva = {
        precio: precio,
        tipo_factura: tipo_factura, 
        iva: iva,
        precioConIva: precio + iva
    };
    if (tipo_factura == 'B'.toLowerCase() || tipo_factura == 'C'.toLowerCase()) {
        return precioConIva;
    } else {
        precioConIva.iva = precio
        return precioConIva;
    } 
}

console.log(calcularIva(20, 'b'));