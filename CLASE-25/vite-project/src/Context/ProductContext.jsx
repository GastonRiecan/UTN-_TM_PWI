import { createContext, useContext, useState } from "react";
import { eliminarProductoPorId, obtenerProductos } from "../helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [productos, setProductos] = useState(obtenerProductos());
  const navigation = useNavigate();

  const handleDeleteProduct = (id) => {
    setProductos(eliminarProductoPorId(id));
    navigation("/");
  };

  const getUserData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
    /*  if(user){
            return user
        }
        else{
            navigation('/login')
        } */
  };

  const setUserData = ( userData ) => {
    const userData_JSON = JSON.stringify( userData );
    localStorage.setItem("user", userData_JSON);
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigation("/login");
  };

  return (
    <GlobalContext.Provider
      value={{
        productos,
        handleDeleteProduct,
        getUserData,
        logout,
        setUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  /*Esto devolvera el objeto value proveido por el GlobalContext  */
  return useContext(GlobalContext);
};

/* 
const globalContextValues = useGlobalContext()
Retorna {nombre: nombre} 
*/
