 /*
Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
  Si isLogged es false entonces mostraran un button que diga 'login'
  Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
  OPCIONAL:
  Si lang esta en 'en' todos los textos deben ser en ingles
  Si lang esta en 'es' todos los textos deben ser en español
  */

  import React from 'react'
  import './styles.css'

  
  const NavBar = (props) => {
    const userData = props.userData
    return (
        <nav className='nav'>
            <div className='logo'>
                <h2>LOGO</h2>
            </div>
            <div className='links'>
                {
                    userData.lang == 'es' ? <h2>Inicio</h2> : <h2>Home</h2>
                }

                {
                    userData.isAdmin ? (userData.lang == 'es' ? <button>Crear producto</button> : <button>Create Product</button> )  : null
                }

                {
                    !userData.isLogged ? (userData.lang == 'es' ? <button>Iniciar sesion</button> : <button>Login</button> )  : null
                }
            </div>

        </nav>
    )
  }
  
  export default NavBar
  