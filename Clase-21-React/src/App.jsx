import React from 'react'
import { nombre } from './funciones'
import { persona } from './funciones'
import doSomething from './funciones'
import { Button } from './components/Boton';
import { Carta } from './components/Carta';
import Item from './components/Item';



function App() {
  console.log(nombre);
  console.log(persona);
  doSomething()
  let nombreUsuario = 'lala'
  return (
    <>
      <div>
        <h1>Hola {nombreUsuario}</h1>
        <Button texto = "pppppo"/>
        <Carta/>
        <Item/>
      </div>

      <div>
      <h1>Hola {nombreUsuario}</h1>
      <Button texto = "pollo"/>
      <Carta/>
      <Item/>
      </div>

    </>
  )
}

export default App

