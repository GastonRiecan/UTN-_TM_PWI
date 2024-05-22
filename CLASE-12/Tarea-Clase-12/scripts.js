/* 
1)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
2)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ +
nombre y luego invoca la función dentro de una alerta
3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
4)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación 
es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado),
en caso de recibir una operación no válida devolver null
6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

*/

/*
1)
function decirNombre(nombre) {
    alert('Hola ' + nombre)
}
decirNombre("Gaston"); 

2)
function saludar(nombre) {
    return 'Hola ' + nombre;
}
alert(saludar("Gaston"))

3)
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2,2));

4)
function restar(a, b) {
    return a - b;
}
console.log(restar(20,2));
*/

/*

5)
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}

function calcular(operacion, a, b) {
    if (operacion == "+") {
        return sumar(a, b)
    } else if (operacion == "-") {
        return restar(a, b)
    } else {
        return null
    }
}

console.log(calcular('', 7, 7));
 */

/*

6)
function contarHasta(numero) {
    console.log('Contando: \n');
    for (let i = 1; i <= numero; i++ ) {
        console.log('Numero: ' + i);
    }
}

contarHasta(10); */