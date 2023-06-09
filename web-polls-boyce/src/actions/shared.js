import { getInitialData } from "../utils/api";
import { getUsers } from "./users";
import { getPolls } from "./polls";
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(getUsers(users));
      dispatch(getPolls(polls));
      // TEMP TAKE OUT FOLLOWING LINE LATER 
      dispatch(setAuthedUser("Matt"));
      dispatch(hideLoading());
    });
  };
}
