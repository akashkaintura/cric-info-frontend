import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-blue-600 dark:bg-gray-900 text-white shadow-md">
            <Link to="/" className="text-2xl font-bold">Cricbuzz Clone</Link>
            <DarkModeToggle />
        </header>
    );
};

export default Header;
