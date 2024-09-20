import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value={{name:"anwar"}}>
            {children}
        </AppContext.Provider>
    );
}

const useProductContext = () => {
    return useContext(AppContext);
}

export {AppProvider,useProductContext}