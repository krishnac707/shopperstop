import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [loginbutton, setLoginButton] = useState(false);
    const [loginSignup,setLoginSignup] = useState(false);

    return (<DataContext.Provider value={{setLoginSignup, setLoginButton,loginbutton,loginSignup}}>
        {children}
    </DataContext.Provider>)

}