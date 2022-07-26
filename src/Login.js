import React, { useContext, useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import {AuthContext} from './Context/AuthContext';


export default function Login() {

    const themeContext = useContext(ThemeContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        // send API request to validate data and get token
        if(email === "moh.shehata143@gmail.com" && password === "123")
        {
            const token = "react-login";
            localStorage.setItem("token-react-login",token);
            localStorage.setItem("email-react-login",email);
            authContext.setAuth({token, email});

        }else {
            alert("Wrong username or password");
        }
    }

    return (
        <section className={themeContext.theme === 'dark' ? 'dark' : 'light'}>
            <div className='loginRegister-section'>
                <div className="section-container">
                    <div className="content">
                        <div className="login">
                            <h3 className="text-center">Login Form</h3>
                            <form method="GET" action="">
                                <div className="mb-3 input">
                                    <input type="email" className="form-control" id="txtLoginEmail" placeholder="Type Email" required autoFocus value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3 input">
                                    <input type="password" className="form-control" id="txtLoginPassword" placeholder="Type Password" required autoComplete='off' value={password} onChange={(e)=> setPassword(e.target.value)}  />
                                </div>
                                <div className="form-check pt-3 mb-3">
                                    <input type="checkbox" className="form-check-input" id="chkRemmberme" />
                                    <label className="form-check-label" htmlFor="chkRemmberme">Remember me</label>
                                </div>
                                <div className="row g-3 mt-3">
                                    <button type="submit" id="btnLogin" className="main-btn" onClick={login}>Login</button>
                                </div>
                                <div className="row g-3 mt-3">
                                    <a href="/" className="text-center">Forgit Password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
