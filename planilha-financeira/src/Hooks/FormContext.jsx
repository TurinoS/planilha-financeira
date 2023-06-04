import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormContextProvider = ({children}) => {

    const [submited, setSubmited] = useState()

    return(
        <FormContext.Provider value={{submited, setSubmited}}>{children}</FormContext.Provider>
    )
}