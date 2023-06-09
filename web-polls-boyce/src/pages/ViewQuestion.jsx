import React from 'react';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
// import { Header, Button } from 'semantic-ui-react';

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const ViewQuestion = (props) => {

    console.log('555555555');
    console.log(props);

    if (props.question === undefined) {
        return (<></>);
    }

    const userAnsweredAlready = props.question.optionOne.votes.includes(props.authedUser) || props.question.optionTwo.votes.includes(props.authedUser);

    if (userAnsweredAlready) {
        return (
            <div>
                see other answers
            </div>
        );
    }

    return (
        <div>
            vote here
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

ViewQuestion.propTypes = {
    questionId: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(ViewQuestion));
