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
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}
