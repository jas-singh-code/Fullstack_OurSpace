import * as APIUtil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS ='RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER ='RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER ='LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
})

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => {
      return dispatch(receiveErrors(err.responseJSON))
    })
);

export const login = user => dispatch => {
    debugger
    return APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), console.log(err), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
}

export const logout = () => dispatch => (
    APIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
)

// export const createNewUser = formUser => dispatch => APIUtil.postUser(formUser)
//   .then( user => dispatch(receiveCurrentUser(user)))

// export const login = formUser => dispatch => APIUtil.postSession(formUser)
//  .then( user => dispatch(receiveCurrentUser(user)))

//  export const logout = () => dispatch => APIUtil.deleteSession()
//    .then( () => dispatch(logoutCurrentUser()))