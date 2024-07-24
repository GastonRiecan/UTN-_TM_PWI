import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { eliminarProductoPorId, obtenerProductosPorId, obtenerProductos } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/ProductContext'


const Detail = () => {
  /* useParams retorna un objeto con los parametros de busqueda */
  const parametros = useParams()
  const navigation = useNavigate();

  const {
    nombre,
    descripcion,
    precio,
    id,
    stock,
    codigo,
    categoria,
    thumbnail
  } = obtenerProductosPorId(parametros.producto_id)

  function handleDelete() {
    if (confirm("Seguro que desea eliminar?")) {
      eliminarProductoPorId(id)
      navigation("/");
    } 
  }

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
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  )
}

export default Detail