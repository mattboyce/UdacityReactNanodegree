import React from 'react';
// import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Button } from 'semantic-ui-react';

const UnansweredQuestion = (question) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/questions/${question.question.id}`);
    }

    if (question === undefined || question.question === undefined) {
        return (<></>);
    }

    return (
        <div>
            <Header as="h4" style={{ textAlign: 'center' }}>
                Would you rather
            </Header>
            <p style={{ textAlign: 'center' }}>
                {question.question.optionOne.text}
                <br />
                or...
                <br />
                {question.question.optionTwo.text}
            </p>
            <div style={{ textAlign: 'center' }}>
                <Button
                    size="tiny"
                    fluid
                    onClick={handleClick}
                    content="Answer Question"
                />
                <p>----------------------------------------</p>
            </div>
        </div>
    );
};

UnansweredQuestion.propTypes = {
    question: PropTypes.object.isRequired,
};

export default UnansweredQuestion;