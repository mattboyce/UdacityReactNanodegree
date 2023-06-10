import * as api from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

function saveQuestionAnswer(authedUser, qid, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser, qid, answer,
    };
}

export function handleAddQuestion(question) {
    return (dispatch) => {

        dispatch(showLoading());

        return api.saveQuestion({
            question,
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()));
    };
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return api.saveQuestionAnswer({
            authedUser, qid, answer,
        })
            .then(() => dispatch(saveQuestionAnswer({ authedUser, qid, answer, })))
            .then(() => dispatch(hideLoading()));
    };
}