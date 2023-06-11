// import { saveQuestionAnswer } from '../utils/api';
// import { saveQuestionAnswer } from './questions';

export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function saveAnswerToUser(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_USER,
    authUser,
    qid,
    answer
  };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {

  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveAnswerToUser({
      authedUser, qid, answer,
    })
      .then(() => dispatch(saveAnswerToUser({ authedUser, qid, answer, })));
  };
  // return dispatch => {
  //   dispatch(saveAnswerToUser(authUser, qid, answer));
  //   // dispatch(saveQuestionAnswer(authUser, qid, answer));

  //   // return saveQuestionAnswer(authUser, qid, answer).catch(e => {
  //   //   console.warn('Error in handleSaveQuestionAnswer:', e);
  //   // });
  // };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}
