import React, {createContext, useState} from "react";

export const ThemeContext  = createContext();

export function ThemeProvider(Props) {

    const [theme, setTheme] = useState("dark");

    function toggleTheme(){
        setTheme( theme === 'dark' ? 'light' : 'dark' );
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {Props.children}
        </ThemeContext.Provider>
    );

}