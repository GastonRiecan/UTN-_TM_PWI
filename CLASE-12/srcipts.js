/* 
Solicitar un string al usuario y validar que sea un string valido

Casos invalidos:
null
number (cunalquier tipo de number excepto el NaN)
*/
/* 
let texto = prompt('Ingrese una palabra: ')
while( !texto || !isNaN(texto)) {
    alert('No ingreso un dato valido.')
    texto = prompt('Ingrese una palabra: ')
}
 */
/* 
FOR
Es un bucle que se usa cuando necesitamos repetir
un bloque de codigo una determinada cantidad de veces.
*/

/* Di por consola 5 holas mundo */

/* for (let i = 1; i <= 5; i++) {
    console.log('Hola mundo ' + i);
}
 */


/* Solicitar 3 nombres y mostrarlos por alerta 3 veces */

/* for (let i = 1; i <= 3 ; i++) {
    let nombre = prompt('Ingrese un nombre: ')
    alert(nombre)
}
 */

/* Acumulacion
Solicitar 3 nombres y al final mostrarlos en lista.
-pepe
-juan
-eze
*/

/* let listaDeNombres = 'Lista de nombres: \n'
for(let i = 1; i <= 3; i++) {
    let nombre = prompt('Ingrese un nombre: ')
    listaDeNombres = listaDeNombres + nombre + '\n'
}
alert(listaDeNombres) */

/* Solicitar un numero 3 veces, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros */
/* 
let acum = 0 
for (let i = 1; i <= 3; i++) {
    numero = Number(prompt('Ingrese un numero'))
    acum = acum + numero
    console.log('El numero ' + i + ' es: ' + numero);
}
console.log('La suma es : ' + acum); */

/* Solicitar al usuario una cantidad de rep 
al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
vsmos a solicitar un numero la cantidad de repeticiones ingresada por el usuario 
validar que el numero ingresado sea un numero, en caso de que no volver a solicitarlo
*/
/* let acum = 0
let cantRep = prompt('Ingrese la cantidad de repeticiones: ')
while (isNaN(cantRep)){
    cantRep = prompt('Ingrese la cantidad de repeticiones: ')
}
for (let i = 1; i <= cantRep; i++) {
    numero = Number(prompt('Ingrese un numero'))
    while (isNaN(numero)) {
        alert('Dato no valido.')
        numero = Number(prompt('Ingrese un numero'))
    }
    acum = acum + numero
    console.log('El numero ' + i + ' es: ' + numero);
}
console.log('La suma es : ' + acum); 
 */


/* 
FUNCIONES

declarar mi funcion
function saludar(nombre) {
    alert('Hola a ' +  nombre)
}

invocar la funcion
saludar(pepe)
salida = Hola a pepe


/* 
function sumar(num1, num2) {
    console.log('La suma es: ' +(num1 + num2));
}

sumar(2,3)
 */


/*Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio
valor * 0,21

*/
/* 
function calcularIva(precio) {
    console.log('El iva es: ' + precio * 0.21);
}
calcularIva(200);
 */

function solicitarYvalidarNumero(){
    let numero = prompt('Ingrese un numero: ')
    while(!numero || isNaN(numero)){
        alert('El dato debe ser un numero.')
        numero = prompt('Ingrese un numero: ')
    }
    return Number(numero)
}
let edad = solicitarYvalidarNumero()
alert(edad)