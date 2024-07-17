import React from 'react'
import { ProductList } from '../../components/index.js'
import  productos  from '../../data/productos.js'

const Home = () => {
  return (
    <div>
      <h1>Elige nuestros productos</h1>
      <ProductList productos={productos}/>
    </div>
  )
}

export default Home