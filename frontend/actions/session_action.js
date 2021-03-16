import * as APIUtil from '../util/session_api_util';

const RECEIVE_SESSION_ERRORS ='RECEIVE_SESSION_ERRORS';
const RECEIVE_CURRENT_USER ='RECEIVE_CURRENT_USER';
const LOGOUT_CURRENT_USER ='LOGOUT_CURRENT_USER';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
