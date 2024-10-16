import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-lg bg-gray-200 dark:bg-gray-800 rounded-full"
        >
            {darkMode ? '🌞' : '🌜'}
        </button>
    );
};

export default DarkModeToggle;
