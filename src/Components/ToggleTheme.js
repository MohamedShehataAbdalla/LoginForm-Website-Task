import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function ToggleTheme() {

    const themeContext = useContext(ThemeContext);

    return (
        <button className='btn btn-secondary btn-sm ms-3' onClick={themeContext.toggleTheme}>
            Toggle Theme
        </button>
    );

}
