
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Header } from 'semantic-ui-react';
import { handleAddQuestion } from '../actions/questions';

const CreateQuestion = (props) => {

    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const handleFormChange = (e) => {
        switch (e.target.id) {
            case "optionOneForm":
                setOptionOne(e.target.value);
                break;
            case "optionTwoForm":
                setOptionTwo(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const newQuestion = {
            author: props.authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
        }

        props.dispatch(handleAddQuestion(newQuestion));

        setOptionOne('');
        setOptionTwo('');
    };

    return (
        <div id='wrapper'>
            <Header as="h3" style={{ textAlign: 'center' }}>
                Would you rather...
            </Header>
            <div style={{ textAlign: 'center' }}>
                <Form.Input
                    id="optionOneForm"
                    value={optionOne}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                OR
            </div>
            <div style={{ textAlign: 'center' }}>
                <Form.Input
                    id="optionTwoForm"
                    value={optionTwo}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <Form />
            <div style={{ textAlign: 'center' }}>
                <Button
                    onClick={handleSubmit}
                    content="Submit"
                />
            </div>
        </div >
    );
};

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    };
}

CreateQuestion.propTypes = {
    authedUser: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CreateQuestion);