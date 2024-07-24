import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import { Cart, Detail, Home, Login } from './pages'
import NewProduct from './pages/NewProduct/NewProduct'


function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/detail/:producto_id/' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/new' element={<NewProduct/>} />
      </Routes>
  )
}

export default App
