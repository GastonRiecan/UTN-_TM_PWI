import { createContext, useContext, useState } from "react";
import { eliminarProductoPorId, obtenerProductos } from "../helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const [products, setProductos] = useState(obtenerProductos()) 
    const navigation = useNavigate()

    const handleDelete = (id) => {
        setProductos(eliminarProductoPorId(id))
        navigation('/')
    }

    return (
        <GlobalContext.Provider value={
                {
                    products,
                    delete: handleDelete
                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    /*Esto devolvera el objeto value proveido por el GlobalContext  */
    return useContext(GlobalContext)
}

/* 
const globalContextValues = useGlobalContext()
Retorna {nombre: nombre} 
*/