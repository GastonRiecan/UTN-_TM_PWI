import React from "react";
import { ProductList } from "../../components/index.js";
import { obtenerProductos } from "../../helpers/productos.js";
import { useGlobalContext } from "../../Context/ProductContext.jsx";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { productos, getUserData, logout } = useGlobalContext();
  const user = getUserData();

  return (
    <div>
      <div>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
        {user && user.role === "admin" && (
          <>
            <Link to={"/product/new"}>Crear Producto</Link>
            <Link to={"/cart"}>Carrito</Link>
          </>
        )}
        {user && user.role === "user" && (
          <>
            <Link to={"/cart"}>Carrito</Link>
          </>
        )}
      </div>
      <h1>Elige nuestros productos</h1>
      <ProductList productos={obtenerProductos()} />
    </div>
  );
};

export default Home;
