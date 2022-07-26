import React, { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

export default function Home() {

    const themeContext = useContext(ThemeContext);

    return (
        <section className={themeContext.theme === 'dark' ? 'dark' : 'light'}>
            <div className="home-page">
                <div className="container">
                    <h3 className="text-center">Welcome to Home</h3>
                </div>
            </div>
        </section>
    );

}
