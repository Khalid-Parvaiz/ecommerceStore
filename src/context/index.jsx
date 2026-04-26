import { createContext, useState } from "react";

const DataContext = createContext()

function DataContextProvider({children}) {
    const [loginUser , setLoginUser] = useState()

    return(
        <DataContext.Provider value={{loginUser , setLoginUser}}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataContext,    
    DataContextProvider
}