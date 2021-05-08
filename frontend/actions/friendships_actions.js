  
import * as FriendshipAPIUtil from '../util/friendship_api_util';
import { receiveErrors } from './session_action';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const DELETE_FRIENDSHIP = 'DELETE_FRIENDSHIP';

const receiveFriendship = (friendship) => {
    return ({
        type: RECEIVE_FRIENDSHIP,
        friendship
    })
}

const deleteFriendshipObj = (friendship) => {
    return ({
        type: DELETE_FRIENDSHIP,
        friendship
    })
}

export const createFriendship = (friendship) => (dispatch) => {
    return (
        FriendshipAPIUtil.createFriendship(friendship)
            .then(
                friendship => dispatch(receiveFriendship(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteFriendship = (friendship) => (dispatch) => {
    return (
        FriendshipAPIUtil.deleteFriendship(friendship)
            .then(
                friendship => dispatch(deleteFriendshipObj(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}