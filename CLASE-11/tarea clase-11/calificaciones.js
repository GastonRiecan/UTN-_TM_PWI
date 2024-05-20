/* 
2)
Crea un programa que le pida al usuario que introduzca una calificación numérica (entre 0 y 100) mediante un prompt. El programa debe convertir la calificación a una letra según la siguiente escala:
90 a 100: A
80 a 89: B
70 a 79: C
60 a 69: D
0 a 59: F
Si la calificación introducida está fuera del rango de 0 a 100, el programa debe mostrar "Calificación no válida."
*/

let calificacion = prompt('Introduzca una calificacion numerica (entre 0 y 100): ');
if ( calificacion >= 0 && calificacion <= 59) {
    console.log('F');
} else if ( calificacion >= 60 && calificacion <= 69) {
    console.log('D');
} else if ( calificacion >= 70 && calificacion <= 79) {
    console.log('C');
} else if ( calificacion >= 80 && calificacion <= 89) {
    console.log('B');
} else if ( calificacion >= 90 && calificacion <= 100) {
    console.log('A');
} else {
    console.log('Calificacion no valida');
}