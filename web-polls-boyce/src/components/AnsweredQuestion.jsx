import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const AnsweredQuestion = (props) => {

    if (props.question === undefined) {
        return (<></>);
    }

    const optionOneVoteCount = props.question.optionOne.votes.length;
    const optionTwoVoteCount = props.question.optionTwo.votes.length;
    const totalVotes = optionOneVoteCount + optionTwoVoteCount;

    return (
        <div>
            <Header as="h4" style={{ textAlign: 'center' }}>
                Would you rather
            </Header>
            <p style={{ textAlign: 'center' }}>
                {props.question.optionOne.text} - Votes: {optionOneVoteCount} ({((optionOneVoteCount / totalVotes) * 100).toFixed(2)}%)
                <br />
                or...
                <br />
                {props.question.optionTwo.text} - Votes: {optionTwoVoteCount} ({((optionTwoVoteCount / totalVotes) * 100).toFixed(2)}%)
            </p>
            <div style={{ textAlign: 'center' }}>
                <p>Your Vote: {props.question.optionOne.votes.includes(props.authedUser) ? props.question.optionOne.text : props.question.optionTwo.text} </p>
            </div>
        </div>
    );
};

const mapStateToProps = ({ questions, authedUser }, props) => {
    const { id } = props.router.params;

    return {
        id,
        question: questions[id],
        authedUser: authedUser,
    };
}

AnsweredQuestion.propTypes = {
    authedUser: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(AnsweredQuestion));