function contieneMayusculas(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            return true;
        }
    }
    return false;
}
const validaEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

const validaPassword = (password) => {
    return password.length >= 6 && password != null && password != "" && contieneMayusculas(password)
}





const solicitaDatos = (objeto) => {

    let dato = prompt(objeto.mensaje);
    while (!objeto.validacion(dato)) {
        dato = prompt(objeto.ERROR);
    }
    return dato;
}


const DATOSS = {
    email: {
        mensaje: 'Ingrese un email',
        ERROR: 'ERROR: Ingrese nuevamente su email:',
        validacion: validaEmail
    },
    PASSWORD: {
        mensaje: 'Ingrese un password',
        ERROR: 'ERROR: Ingrese nuevamente su password:',
        validacion: validaPassword
    }
}

const login = () => {

    let usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitaDatos(DATOSS.email);

    usuario.password = solicitaDatos(DATOSS.PASSWORD);


    alert(`Usuario ${usuario.email} registrado con exito`);

    return usuario
}

login() 

/* 
Crear una funcion llamada calculadora() que de inicio a la sig logica
-Operaciones Disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado}
*/

const operacionesDisponibles = ['+', '-'];  

const validaOperacion = (operacion) => operacionesDisponibles.includes(operacion);

const validaNumero = (numero) => !isNaN(numero);

const DATOS = {
    operacion: {
        mensaje: 'Ingrese una operacion',
        ERROR: 'ERROR: Ingrese nuevamente una operacion:',
        validacion: validaOperacion
    },
    numero: {
        mensaje: 'Ingrese un numero',
        ERROR: 'ERROR: Ingrese un numero valido:',
        validacion: validaNumero
    }
}

const solicitarDatos = (objeto) => {

    let dato = prompt(objeto.mensaje);
    while (!objeto.validacion(dato)) {
        dato = prompt(objeto.ERROR);
    }
    return dato;
}

const calculadora = () => {
    let operacion = solicitarDatos(DATOS.operacion);

    let numero1 = solicitarDatos(DATOS.numero);


    let numero2 = solicitarDatos(DATOS.numero);
    let resultado = 0;

    if (operacion == '+') {
        resultado = parseInt(numero1) + parseInt(numero2)
    } else if (operacion == '-') {
        resultado = parseInt(numero1) - parseInt(numero2)
    }

    return alert(`El resultado de ${numero1} ${operacion} ${numero2} es:  ${resultado}`)
    
}

calculadora()