import React from 'react';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import AnsweredQuestion from '../components/AnsweredQuestion';
import UnansweredQuestion from '../components/UnansweredQuestion';
import { Image } from 'semantic-ui-react';

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

    if (props.question === undefined) {
        return (<></>);
    }

    const userAnsweredAlready = props.question.optionOne.votes.includes(props.authedUser) || props.question.optionTwo.votes.includes(props.authedUser);
    const name = props.users[props.question.author].name;

    if (userAnsweredAlready) {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <Image src="/avatar-icon.jpg" />
                    <p>Poll created by: {name}</p>
                </div>
                <AnsweredQuestion />
            </div>
        );
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <Image src="/avatar-icon.jpg" />
                <p>Poll created by: {name}</p>
            </div>
            <UnansweredQuestion />
        </div>
    );
};

const mapStateToProps = ({ questions, authedUser, users }, props) => {
    const { id } = props.router.params;

    return {
        id,
        question: questions[id],
        authedUser: authedUser,
        users
    };
}

ViewQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    authedUser: PropTypes.string.isRequired,
    users: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(ViewQuestion));
