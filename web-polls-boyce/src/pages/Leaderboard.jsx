
import React from 'react';
import { connect } from 'react-redux';
import LeaderboardCard from '../components/LeaderboardCard';


const Leaderboard = () => {
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

function mapStateToProps({ users, questions }) {
    return {
        users,
        questions,
    };
}

export default connect(mapStateToProps)(Leaderboard);