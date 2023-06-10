import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PreviewQuestion from '../components/PreviewQuestion';

const changeTab = (tabName) => {

    const tabContent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabContent.length; i++) {
        if (tabName === tabContent[i].id) {
            tabContent[i].style.display = "block";
        }
        else {
            tabContent[i].style.display = "none";
        }
    }
}

const hasAuthedUserVoted = (question, authedUser) => {
    if (question.optionOne.votes.includes(authedUser)) {
        return true;
    }
    if (question.optionTwo.votes.includes(authedUser)) {
        return true;
    }
    return false;
}

const Home = (props) => {

    const { questions, authedUser } = props;
    const questionsArr = Object.values(questions);

    if (props.questions === undefined || props.questions === null) {
        return (<div id='wrapper' style={{ textAlign: 'center' }}>
            <div className="tab">
                <button id="unansweredButton" onClick={() => changeTab('unanswered')}>Unanswered Questions</button>
                <button id="answeredButton" onClick={() => changeTab('answered')}>Answered Questions</button>
            </div>
        </div >);
    }

    return (
        <div id='wrapper'>
            <div className="tab" style={{ textAlign: 'center' }}>
                <button onClick={() => changeTab('unanswered')}>Unanswered Questions</button>
                <button onClick={() => changeTab('answered')}>Answered Questions</button>
            </div>
            <div id="unanswered" className="tabcontent">
                <h2 style={{ textAlign: 'center' }}>Unanswered Questions</h2>
                {questionsArr.map((question) => (hasAuthedUserVoted(question, authedUser) ? (<div key={question.id} />) : (<PreviewQuestion key={question.id} question={question} />)))}
            </div>

            <div id="answered" className="tabcontent" style={{ display: 'none' }}>
                <h2 style={{ textAlign: 'center' }}>Answered Questions</h2>
                {questionsArr.map((question) => (hasAuthedUserVoted(question, authedUser) ? (<PreviewQuestion key={question.id} question={question} />) : (<div key={question.id} />)))}
            </div>
        </div >
    );
};

const mapStateToProps = ({ authedUser, questions }) => ({
    authedUser: authedUser,
    questions: questions,
});

Home.propTypes = {
    authedUser: PropTypes.string.isRequired,
    questions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Home);