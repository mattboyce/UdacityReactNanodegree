/* eslint-disable no-case-declarations */
import { GET_QUESTIONS, SAVE_QUESTION_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {

        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case SAVE_QUESTION_ANSWER:
            const { authedUser, } = action;
            return {
                ...state,
                [authedUser.qid]: {
                    ...state[authedUser.qid],
                    [authedUser.answer]: {
                        ...state[authedUser.qid][authedUser.answer],
                        votes: state[authedUser.qid][authedUser.answer].votes.concat(authedUser.authedUser)
                    }
                }
            };
        case ADD_QUESTION:
            const { question } = action;

            return {
                ...state,
                [question.id]: question
            };
        default:
            return state;
    }
}