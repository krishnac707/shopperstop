import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';

export const AuthContext = createContext();
const initialState = ({ user: null });
const reducer = (state, action) => {
    switch (action?.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
}

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getCurrentUser = async () => {
            var token = JSON.parse(localStorage.getItem("shopperstopToken"));
            const response = await axios.post("http://localhost:8007/get-current-user", { token });
            if (response.data.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response?.data?.user
                })
            }
            // else{
            //     dispatch({
            //         type:"LOGOUT",
            //     })
            // }
        }
        getCurrentUser();
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

