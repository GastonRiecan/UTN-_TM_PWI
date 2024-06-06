/* ## Historial


-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage
si nos devuelve null el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial (debe retornar un array)
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto
y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localstorage el objeto recibido */



/* 
const obtenerHistorial = () => {
    if (localStorage.getItem('historial') == null) {
        localStorage.setItem('historial', JSON.stringify([]))
    } else {
        let historial = [];
        historial = historial.push(localStorage.getItem('historial'))
        return historial
    }
}

const guardarEnHistorial = (objeto) => {
    localStorage.setItem('historial', historial.push(JSON.stringify(objeto)))
}
 */

/* SOLUCION OK: */

if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))
const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}


/* 
Cada elemento del historial tendra el siguiente formato
{
    accion: 'calculadora',
    operacion: '+'||'-',
    a: number,
    b: number,
    resultado: number,
    fecha: dd/mm/aaaa || '18|01/2020'
}

Esto significa que cuando usemos guardarEnHistorial debemos guardar el objeto de la esa manera


Vamos a crear una funcion llamada renderizarHistorial

va a llamar al historial guardado y por cada elemento del historial vamos a crear la sig plantilla 
`
Accion: {accion}
Operacion: {operacion}
Numeros: {a}, {b}
Resultado: {resultado}
fecha: {fecha}
`

y la acumularan en un string y al finalizar el recorrido mostraran el string por alerta


Para hacer el ejercicio recuerden previamente guardar algunas operaciones en el historial y borren las anteriores

guardarEnElHistorial({
    accion: 'calculadora',
    operacion: '+',
    a: 3,
    b: 3,
    resultado: 6,
    fecha:  '18|01/2020'
})

*/
const op1 = {
    accion: 'calculadora',
    operacion: '+',
    a: 3,
    b: 5,
    resultado: 8,
    fecha: '18/01/2020'
}
const op2 = {
    accion: 'calculadora',
    operacion: '-',
    a: 1,
    b: 1,
    resultado: 2,
    fecha: '06/05/2024'
}
const op3 = {
    accion: 'calculadora',
    operacion: '+',
    a: 5,
    b: 5,
    resultado: 10,
    fecha: '22/11/1997'
}

guardarEnHistorial(op1)
guardarEnHistorial(op2)
guardarEnHistorial(op3)

let historial = obtenerHistorial()

const renderizaHistorial = () => {
    let listaHistorial = ''
    for (let obj of historial) {
        listaHistorial = listaHistorial + `
        Accion: ${obj.accion}
        Operacion: ${obj.operacion}
        Numero1: ${obj.a}
        Numero2: ${obj.b}
        Resultado: ${obj.resultado}
        Fecha: ${obj.fecha}
        `
    }
    return listaHistorial
}

console.log(renderizaHistorial());

localStorage.clear()