import React from "react";

const NewProduct = () => {
  return (
    <div>
      <h1>New Product</h1>
      <form action="">
        <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" id="Nombre" />

          <label htmlFor="Descripcion">Descripcion</label>
          <input type="text" minLength="11" id="Descripcion" />

          <label htmlFor="Precio">Precio</label>
          <input type="number" min="1" id="Precio" />

          <label htmlFor="Stock">Stock</label>
          <input type="number" min="1" id="Stock" />

          <label htmlFor="Codigo">Codigo</label>
          <input type="text" id="Codigo" />

          <label htmlFor="Categoria">Categoria</label>
          <input type="text" id="Categoria" />

          <label htmlFor="Thumbnail">Thumbnail </label>
          <input type="text" id="Thumbnail" />
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
/* 
nombre: string,
descripcion: string, mas de 10 caracteres,
precio: number psitivo distinto de 0,
stock: numero positivo distinto de 0,
codigo: string,
categoria: string,
thumbnail: string

*/
