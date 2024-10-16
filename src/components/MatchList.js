import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const MatchList = () => {
    const [matches, setMatches] = useState([
        { id: 1, name: 'Match 1', status: 'Live', description: 'Exciting match between Team A and Team B' },
        { id: 2, name: 'Match 2', status: 'Upcoming', description: 'Match between Team C and Team D' }
    ]);


    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axiosInstance.get('/matches');
                console.log("Match Data:", response.data); // Log the response data here
                setMatches(response.data); // Assuming the API returns an array of matches
            } catch (error) {
                console.error("Error fetching matches:", error);
            }
        };

        fetchMatches();
    }, []);

    return (
        <div className="p-4">
            {matches.length === 0 ? (
                <p>No matches available</p>
            ) : (
                matches.map((match) => (
                    <div key={match.id} className="p-4 bg-white shadow-md rounded mb-4">
                        <h3 className="font-bold">{match.name}</h3>
                        <p>Status: {match.status}</p>
                        <p>Description: {match.description}</p>
                    </div>
                ))
            )}
        </div>
    );

};

export default MatchList;
