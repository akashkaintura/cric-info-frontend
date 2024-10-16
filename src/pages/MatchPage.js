import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const MatchPage = () => {
    const { matchId } = useParams();
    const [match, setMatch] = useState(null);

    useEffect(() => {
        const fetchMatch = async () => {
            try {
                const response = await axiosInstance.get(`/matches/${matchId}`);
                setMatch(response.data);
            } catch (error) {
                console.error("Error fetching match details:", error);
            }
        };
        fetchMatch();
    }, [matchId]);

    if (!match) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{match.name}</h2>
            <p>{match.status}</p>
            <p>{match.description}</p>
        </div>
    );
};

export default MatchPage;
