import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const GET_POLLS = "GET_POLLS";
export const SAVE_POLL_ANSWER = "SAVE_POLL_ANSWER";
export const ADD_POLL = "ADD_POLL";

export function getPolls(polls) {
    return {
        type: GET_POLLS,
        polls,
    };
}

function addPoll(question) {
    return {
        type: ADD_POLL,
        question,
    };
}

function savePollAnswer(authedUser, qid, answer) {
    return {
        type: SAVE_POLL_ANSWER,
        authedUser, qid, answer,
    };
}

export function handleAddPoll(question) {
    return (dispatch) => {

        dispatch(showLoading());

        return saveQuestion({
            question,
        })
            .then((question) => dispatch(addPoll(question)))
            .then(() => dispatch(hideLoading()));
    };
}

export function handleAnswerPoll(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser, qid, answer,
        })
            .then((authedUser, qid, answer,) => dispatch(savePollAnswer(authedUser, qid, answer,)))
            .then(() => dispatch(hideLoading()));
    };
}