import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../helpers/productos'


const Detail = () => {
  /* useParams retorna un objeto con los parametros de busqueda */
  const parametros = useParams()
  console.log(parametros)


  const {
    nombre,
    descripcion,
    precio,
    id,
    stock,
    codigo,
    categoria,
    thumbnail
  } = obtenerProductoPorId(parametros.producto_id)

  return (
    <div>
      <h1>{ nombre }</h1>
      <img src={`/images/${thumbnail}`} style={{maxWidth:'400px'}}/>
      <p>Categoria: {categoria}</p>
      <p>
        {descripcion}
      </p>
      <span>
        <b>Precio</b>:{precio}
      </span>
      <br/>
      <span>
        <b>Unidades disponibles</b>:
        {stock}
      </span>
      <br/>
      <button>Comprar</button>
    </div>
  )
}

export default Detail