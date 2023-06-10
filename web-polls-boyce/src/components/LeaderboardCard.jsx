import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Segment,
    Grid,
    Header,
    Image,
    Label,
    Divider
} from 'semantic-ui-react';

const LeaderboardCard = (props) => {

    console.log(props);

    const { leaderboardData } = props;

    return (
        <div>
            {leaderboardData.map((user) => (
                <Grid key={user.id} style={{ textAlign: 'center' }}>
                    <Grid.Row>
                        <Image src={user.avatarURL} />
                        <Header as="h3" textAlign="left">
                            {user.name}
                        </Header>
                        <Grid>
                            <Grid.Column >Answered questions</Grid.Column>
                            <Grid.Column >{user.answerCount}</Grid.Column>
                        </Grid>
                        <Divider />
                        <Grid>
                            <Grid.Column>Created questions</Grid.Column>
                            <Grid.Column>{user.questionCount}</Grid.Column>
                        </Grid>
                        <Header as="h5" block attached="top" content="Score" />
                        <Segment>
                            <Label circular color="green" size="big">
                                {user.questionCount + user.answerCount}
                            </Label>
                            <p>--------------------------------</p>
                        </Segment>
                    </Grid.Row>
                </Grid>
            ))}
        </div>
    );
};

function mapStateToProps({ users }) {

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(users);
    const leaderboardData = Object.values(users)
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: '/avatar-icon.jpg',
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total)
        .reverse();
    // .slice(0, 3);
    return {
        leaderboardData
    };
}

LeaderboardCard.propTypes = {
    leaderboardData: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(LeaderboardCard);