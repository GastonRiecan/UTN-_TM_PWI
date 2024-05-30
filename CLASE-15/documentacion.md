### Calculadora

##Funcionalidades

-Login
    -Solicitar email
    -Solicitar password
-Calcular operaciones
    -Operaciones disponibles:
        1) + 
        2) - 
-Historial
    -agregarAlHistorial
    -mostrarHistorial/renderizarHistorial


### Utilidades:

-Validaciones:
    -numero
    -password
    -email
    operacionesCalculadora

## Reglas:

Los ejercisios se pueden resolver de muchas formas.
Si crees necesario usar funciones, las podes usar.
Cumplir en la medida de lo posible con el principio: DRY(no repetir), KISS(ser declarativo).

## Login
Debo tener una funcion llamada login que active toda la logica del login

Logica del login:

    Solicitar un email y validarlo
    Solicitar un password y validarlo(que tenga mas de 6 caracteres, al menos 1 mayuscula, y que no sea'' o null)

    Si todo esta correcto dira por alert('Usuario {email}' registrado con exito) y retornara el usuario como objeto:

    EJEMPLO:

    login() // retorna usuario {
        email: 'value@gmail.com'
        password: 'Pepe1213'
    }

    ## Calculadora de Operaciones:

    -Operaciones disponibles:
    1) + 
    2) - 

    Solicitar una operacion y verificar que sea valida(que este dentro de xlas operaciones)
    Solicitar un numero 1 y validarlo
    Solicitar un numero 2 y validarlo

    Al finalizar las solicitudes mostrar el resultado con alert() de la siguiente manera:
    `El resultado de {numero1} {operacion} {numero2} es {resultado}`
