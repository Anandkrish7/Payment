import React,{ useState, useEffect, createContext } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [state, setState] = useState({
        user: {},
        token: "",
    })

    useEffect(()=>{
        const authData = localStorage.getItem('auth');
        if (authData) {
            // Parse the auth data from localStorage
            const parsedData = authData;
            setState({
                user: parsedData.rest,  // Assuming 'rest' contains user info
                token: parsedData.token,
            });
        }
    },[])

    useEffect(() => {
        const token = state.token || "";  // Fallback to empty string if no token
        axios.defaults.baseURL = import.meta.env.VITE_API_URL;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }, [state.token]);

    // axios config
    const token = state && state.token ? state.token : ""
    axios.defaults.baseURL = process.env.API_URL;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    return(
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };