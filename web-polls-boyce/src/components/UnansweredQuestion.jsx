import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Header, Button } from 'semantic-ui-react';
import { handleAnswerQuestion } from '../actions/questions';

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const UnansweredQuestion = (props) => {

    if (props.question === undefined) {
        return (<></>);
    }

    const handleVoteClick = (e) => {
        switch (e.target.id) {
            case "OptionOneBtn":
                props.dispatch(handleAnswerQuestion(props.question.id, "optionOne"));
                break;
            case "OptionTwoBtn":
                props.dispatch(handleAnswerQuestion(props.question.id, "optionTwo"));
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <Header as="h4" style={{ textAlign: 'center' }}>
                Would you rather
            </Header>
            <p style={{ textAlign: 'center' }}>
                {props.question.optionOne.text}
                <Button
                    id="OptionOneBtn"
                    onClick={handleVoteClick}
                    content="Vote"
                />
                <br />
                OR
                <br />
                {props.question.optionTwo.text}
                <Button
                    id="OptionTwoBtn"
                    onClick={handleVoteClick}
                    content="Vote"
                />
            </p>
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

UnansweredQuestion.propTypes = {
    authedUser: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps)(UnansweredQuestion));