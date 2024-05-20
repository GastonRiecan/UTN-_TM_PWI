/* 3)
Desarrolla un programa que le pida al usuario las longitudes de los tres lados de un triángulo mediante tres prompts separados. El programa debe determinar y mostrar en la consola el tipo de triángulo que se forma (equilátero, isósceles o escaleno) según las longitudes de los lados introducidos:
Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar "Longitudes no válidas."
*/

let lado1 = prompt('Ingrese el primer lado del triangulo: ');
let lado2 = prompt('Ingrese el segundo lado del triangulo: ');
let lado3 = prompt('Ingrese el tercer lado del triangulo: ');


if (lado1 <= 0) {
    console.log('Longitudes no validas.');
} else {
    if ( lado1 == lado2 && lado1 == lado3) {
        console.log('Su triangulo es Equilatero.')
    } else if ( lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2) {
        console.log('Su triangulo es Isoceles.')
    } else if ( lado1 != lado2 && lado1 != lado3) {
        console.log('Su triangulo es Escaleno.')
    };
}
