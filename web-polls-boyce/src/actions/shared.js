import { getInitialData } from "../utils/api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      // TEMP TAKE OUT FOLLOWING LINE LATER 
      dispatch(setAuthedUser("mtsamis"));
      dispatch(hideLoading());
    });
  };
}
