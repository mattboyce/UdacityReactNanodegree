export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
    console.log('66666666666');
    return {
        type: SET_AUTHED_USER,
        id,
    };
}
