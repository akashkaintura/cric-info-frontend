import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import useWebSocket from '../hooks/useWebsocket';

const LiveScoreBoard = ({ matchId }) => {
    const [matchData, setMatchData] = useState(null);
    const liveData = useWebSocket('ws://localhost:8080');

    useEffect(() => {
        const fetchMatchData = async () => {
            try {
                const response = await axiosInstance.get(`/matches/${matchId}`);
                setMatchData(response.data);
            } catch (error) {
                console.error('Error fetching match data:', error);
            }
        };

        fetchMatchData();
    }, [matchId]);

    return (
        <div>
            {matchData ? (
                <div>
                    <h2>{matchData.name}</h2>
                    <p>Status: {matchData.status}</p>
                    <p>Description: {matchData.description}</p>
                    {liveData && (
                        <div>
                            <h3>Live Update:</h3>
                            <p>{liveData.message}</p>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading match details...</p>
            )}
        </div>
    );
};

export default LiveScoreBoard;
