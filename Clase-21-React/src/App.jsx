import React from 'react'
import { nombre } from './funciones'
import { persona } from './funciones'
import doSomething from './funciones'
import { Button } from './components/Boton';
import { Carta } from './components/Carta';
import Item from './components/Item';
import RowArticle from './components/RowArticle';



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
      <RowArticle titulo = {'Lift-off: The MDN Curriculum launch'} fecha = {'4 months ago'} direccion_author = {'developer.mozilla.org'}/>


    </>
  )
}

export default App

