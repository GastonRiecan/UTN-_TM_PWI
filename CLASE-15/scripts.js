// Login

function contieneMayusculas(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            return true;
        }
    }
    return false;
}
const validaMail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

const validaPassword = (password) => {
    return password.length >= 6 && password != null && password != "" && contieneMayusculas(password)  
} 

const login = () => {

        let usuario = {
            email: "",
            password: ""
        }

        let email = prompt("Ingrese su email: ");
        while (!validaMail(email)) {
            email = prompt("ERROR: Ingrese nuevamente su email: ");
        }

        usuario.email = email;

        let password = prompt("Ingrese su password: ");
        while (!validaPassword(password)) {
            password = prompt("ERROR: Ingrese nuevamente su password: ");
        }

        usuario.password = password;

        alert(`Usuario ${email} ingresado con exito`);
    }
    
    login()
    