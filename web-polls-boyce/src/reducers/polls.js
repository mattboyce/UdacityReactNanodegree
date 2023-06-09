/* eslint-disable no-case-declarations */
import { GET_POLLS, SAVE_POLL_ANSWER, ADD_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
    switch (action.type) {
        case GET_POLLS:
            return {
                ...state,
                ...action.polls
            };
        case SAVE_POLL_ANSWER:
            const { authUser, qid, answer } = action;

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authUser)
                    }
                }
            };
        case ADD_POLL:
            const { poll } = action;

            return {
                ...state,
                [poll.id]: poll
            };
        default:
            return state;
    }
}