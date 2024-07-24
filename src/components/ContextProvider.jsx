import { useState } from "react"
import { fullcrudContext } from "./fullcrudContext"

const ContextProvider = ({ children }) => {
    //usando usestate donde devuelve un json 
    const [usuario, setUsuario] = useState({
        "id_user": 1,
        "name": "Manuel",
    })

    return (
        <fullcrudContext.Provider
            value={{
                usuario,
                setUsuario,
            }}
        >
            {children}
        </fullcrudContext.Provider>
    )
}

export default ContextProvider
