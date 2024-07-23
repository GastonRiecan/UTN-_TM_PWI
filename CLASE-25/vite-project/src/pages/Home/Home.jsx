import React from 'react'
import { ProductList } from '../../components/index.js'
import { obtenerProductos } from '../../helpers/productos.js'

const Home = () => {
  return (
    <div>
      <h1>Elige nuestros productos</h1>
      <ProductList productos={obtenerProductos()}/>
    </div>
  )
}

export default Home