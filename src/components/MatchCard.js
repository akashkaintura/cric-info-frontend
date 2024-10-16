import React from 'react';
import { Link } from 'react-router-dom';

const MatchCard = ({ match }) => {
    return (
        <Link to={`/match/${match.id}`} className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">{match.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{match.status}</p>
        </Link>
    );
};

export default MatchCard;
