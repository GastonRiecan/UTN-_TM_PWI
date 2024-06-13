const alertar = () => alert('alertar')

const btn2HTML = document.getElementById('btn-2')

btn2HTML.onclick = alertar

const btn3HTML = document.querySelector('.btn-3')

btn3HTML.addEventListener('click', alertar)

/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

*/

const numero = document.getElementById('numero')
const boton = document.getElementById('+')
const botonMenos = document.getElementById('-')
let contador = 1 
numero.innerText = 1

const incrementar = () => {
    contador++
    numero.innerText = contador
}

const decrementar = () => {
    if(contador < 1 ){
        console.log('No se puede decrementar mas.');
    } else{
        contador--
        numero.innerText = contador
    }
}

boton.addEventListener('click', incrementar)
botonMenos.addEventListener('click', decrementar)

/* 
Crear el boton para decrementar
*/

const formLoginHTML = document.getElementById('form-login')

console.dir(formLoginHTML.password.value)
console.dir(formLoginHTML.username.value)


const handleLogin = ( evento ) =>{
    /* Prevenimos que se recarge la pagina al enviarse el formulario */
    evento.preventDefault()
    console.log('formulario enviado')
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)