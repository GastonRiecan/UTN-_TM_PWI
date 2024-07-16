import React, { useState } from 'react'
import ColorCardList from './Components/ColorCardList/ColorCardList'
import { colorCardList } from './data'
import ColorCardForm from './Components/ColorCardForm/ColorCardForm'

function App() {
  const [newColor, setNewColor] = useState(null)
  console.log({newColor});

  function manageNewColor (e, values) {
    e.preventDefault()

    console.log({values});

    const color = {
      colors: ['#219C19', '#FFF455', '#FFC700', '#EE4E4E'],
      likes: 886,
      time: '2 weeks',
      id: 1
    }

    color.colors = [ values.color_1, values.color_2, values.color_3, values.color_4 ]

    setNewColor([color])
  }

  return (
    <>
      {/* <ColorCardList colorCardList={newColor} />

      <Counter limitUp={5} limitDown={0} /> */}

      <ColorCardForm handleSubmit={manageNewColor}/>

      {
        newColor && <ColorCardList colorCardList={newColor} />
      }
    </>
  )
}
const Counter = ({ limitUp, limitDown }) => {
  const [contador, setContador] = useState(0)

  const handleIncrease = () => {
      setContador(contador + 1)
  }

  const handleDecrease = () => {
      setContador(contador - 1)
  }

  return (
    <>
      <button onClick={handleDecrease} disabled={contador === limitDown}>-</button>
      <span>{contador}</span>
      <button onClick={handleIncrease} disabled={contador === limitUp}>+</button>
    </>
  )
}

/* 
1) Crear el boton para decrementar el contador

2)El decrementador no puede ser menos de 0

3)Si el contador es 10 que no se muestre el boton de <button>+</button>

4)Crear un componente llamado Counter que recibira una prop llamada limit
  El limit sera el numero limite que tendra el contador (ya no sera siempre 10)
  <Counter limit={3}/>
*/



export default App