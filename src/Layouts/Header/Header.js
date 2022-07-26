import React, { useContext } from 'react';
import ToggleTheme from '../../Components/ToggleTheme';
import { ThemeContext } from '../../Context/ThemeContext';
import {AuthContext} from '../../Context/AuthContext';

export default function Header() {

    const themeContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);

    // console.log({themeContext});

    const logout = () => {
        authContext.setAuth({});
        localStorage.removeItem("token-react-login");
        localStorage.removeItem("email-react-login");
    }

    return (
        <header className={themeContext.theme === 'dark' ? 'dark' : 'light' }>
            Header
            <div className='float-end d-inline-flex'>
                {authContext.auth.email ? 
                <div>
                    {authContext.auth.email}
                    <button className='btn btn-danger btn-sm ms-3' onClick={()=> logout()}>Logout</button>
                </div>
                :"You can sign in."}

                <ToggleTheme />
            </div>
        </header>
    );

}
