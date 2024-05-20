/* 
1)
Escribe un programa que le pida al usuario que introduzca su edad mediante un prompt. Luego, el programa debe determinar y mostrar en la consola en qué etapa de la vida se encuentra el usuario según su edad. Las etapas son las siguientes:
Si la edad es menor de 0, mostrar "Edad no válida."
Si la edad es menor de 13, mostrar "Eres un niño."
Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
Si la edad es 65 o mayor, mostrar "Eres una persona mayor."
*/

let edad = prompt('Ingrese su edad: ');
if (edad < 0) {
    console.log('Edad no valida');
} else if (edad < 13) {
    console.log('Eres un niño');
} else if (edad >= 13 && edad <= 17) {
    console.log('Eres un adolecente');
} else if (edad >= 18 && edad <= 64) {
    console.log('Eres un adulto');
} else {
    console.log('Eres una persona mayor');
}