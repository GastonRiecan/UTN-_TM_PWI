/* 
5)
Crea un programa que le pida al usuario que introduzca una temperatura en grados 
Celsius mediante un prompt. El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:
Sólido: 0 grados Celsius o menos.
Líquido: entre 0 y 99 grados Celsius.
Gaseoso: 100 grados Celsius o más.
Si la temperatura introducida no es un número válido, el programa debe mostrar "Temperatura no válida."
*/

let temperatura = prompt('Introduzca una temperatura en grados Celsius: ');

if (isNaN(temperatura)) {
    console.log('Temperatura no válida.');
} else {
    if (temperatura <= 0) {
        console.log('El estado del agua es Solido.');
    } else if (temperatura > 0 && temperatura <= 99) {
        console.log('El estado del agua es Liquido.');
    } else if (temperatura >= 100) {
        console.log('El estado del agua es Gaseoso.');
    }
}