// Arrays
/* 
/lista de elementos ordenados
let nombre1 = 'pepe'
let nombre2 = 'juan'
let nombre3 = 'ezequiel'
//posicicion/index 0        1         2
const nombres = ['pepe', 'juan', 'ezequiel']
console.log(nombres[1])
console.log('Tengo ' + nombres.length + ' nombres') */
//array.length (property)
//metodos de array
//array.push()
//array.pop()
//.push(): agrega un elemento al final del array y devuelve la nueva longitud
/* nombres.push('maria') */
//.unshift(): agrega un elemento al principio del array y devuelve la nueva longitud
/* nombres.unshift('maria')
 */
//.pop() elimina el ultimo elemento y nos lo retorna
/* let ultimoElemento = nombres.pop()
console.log(ultimoElemento) */
//.shift() elimina el primer elemento y lo retorna
//SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING
//.indexOf() devuelve la posicion de un string en el array de strings
/* let posicionDeJuan = nombres.indexOf('juan')
console.log('La posicion de juan es ' + posicionDeJuan)
//.splice() */
/*
array.splice()
1er parametro:
-desde donde va posicionarse
2do parametro:
-cantidad de elementos que se quieren borrar
3er parametro:
-Elementos a agregar
*/
/* nombres.splice( posicionDeJuan, 1 ) */
/* const nombres2 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias']
let posicionDeEzequiel = nombres2.indexOf('ezequiel')
const listaDeEliminados = nombres2.splice(posicionDeEzequiel, 0, 'lucas')
console.log(nombres2)
console.log('La lista de eliminados es: ', listaDeEliminados) */
//const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril
//REGLAS:
//-No se puede mirar el array
//-Si van a poder usar consola