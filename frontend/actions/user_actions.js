import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './session_action';
import { receiveCurrentUser } from './session_action';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
// export const REQUEST_USER = 'REQUEST_USER';

const receiveUser = (user) => {
    return ({
        type: RECEIVE_USER,
        user
    })
}

const receiveUsers = (users) => {
    return ({
        type: RECEIVE_USERS,
        users
    })
}

export const getUser = (id) => (dispatch) => {
    return (
        UserAPIUtil.getUser(id)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    ) 
}

export const getUsers = () => (dispatch) => {
    return (
        UserAPIUtil.getUsers()
            .then(
                (users) => dispatch(receiveUsers(users)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const editUser = data => dispatch => {
    return (
        UserAPIUtil.updateUser(data)
        .then(
            (user) => dispatch(receiveUser(user)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const updateUserPhoto = (user) => (dispatch) => {
    return (
        UserAPIUtil.updateUserPhoto(user)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}