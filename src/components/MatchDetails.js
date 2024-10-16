import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const MatchDetails = () => {
    const { matchId } = useParams();
    const [match, setMatch] = useState(null);

    useEffect(() => {
        // Fetch specific match details from the backend
        const fetchMatchDetails = async () => {
            try {
                const response = await axiosInstance.get(`/matches/${matchId}`);
                setMatch(response.data); // Assuming your API returns match data in response.data
            } catch (error) {
                console.error("Error fetching match details:", error);
            }
        };

        fetchMatchDetails();
    }, [matchId]);

    if (!match) return <p>Loading...</p>;

    return (
        <div>
            <h2>{match.name}</h2>
            <p>Status: {match.status}</p>
            <p>Description: {match.description}</p>
        </div>
    );
};

export default MatchDetails;
