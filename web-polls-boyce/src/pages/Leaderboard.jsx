
import React from 'react';
import LeaderboardCard from '../components/LeaderboardCard';


export const Leaderboard = () => {
    return (
        <div id='wrapper'>
            <h2 style={{ textAlign: 'center' }}>Leaderboard</h2>
            <br />
            <div>
                <LeaderboardCard />
            </div>
        </div >
    );
};