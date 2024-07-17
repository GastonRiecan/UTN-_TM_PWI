import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import { Cart, Detail, Home } from './pages'


function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:producto_id/' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
  )
}

export default App
