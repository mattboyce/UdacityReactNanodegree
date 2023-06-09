import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Button } from 'semantic-ui-react';

const PreviewQuestion = (question) => {
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
                    onClick={handleClick}
                    content="View Question"
                />
                <p>----------------------------------------</p>
            </div>
        </div>
    );
};

PreviewQuestion.propTypes = {
    question: PropTypes.object.isRequired,
};

export default PreviewQuestion;