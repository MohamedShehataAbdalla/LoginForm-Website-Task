import React, { useEffect } from 'react'

export const AuthContext = React.createContext();

export function AuthProvider(Props) {

    const [auth, setAuth] = React.useState({});

    useEffect(()=> {
        const token = localStorage.getItem("token-react-login");
        const email = localStorage.getItem("email-react-login");

        if(email)
        {
            setAuth({token,email });
        }

    },[]);
    
    return (
            <AuthContext.Provider value={{auth, setAuth}}>
                {Props.children}
            </AuthContext.Provider>
    );

}
