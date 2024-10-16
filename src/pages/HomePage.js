import React from 'react';
import MatchList from '../components/MatchList';

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-4">Live Matches</h1>
            <MatchList />
        </div>
    );
};

export default HomePage;
