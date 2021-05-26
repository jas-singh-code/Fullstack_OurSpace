  
import * as FriendshipAPIUtil from '../util/friendship_api_util';
import { receiveErrors } from './session_action';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const RECEIVE_ALL_FRIENDSHIPS = 'RECEIVE_ALL_FRIENDSHIPS';
export const DELETE_FRIENDSHIP = 'DELETE_FRIENDSHIP';

const receiveFriendship = (friendship) => {
    return ({
        type: RECEIVE_FRIENDSHIP,
        friendship
    })
}

const receiveAllFriendships = (friendships) => {
    return ({
        type: RECEIVE_ALL_FRIENDSHIPS,
        friendships
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

export const fetchAllFriendships = () => (dispatch) => {
    return (
        FriendshipAPIUtil.allFriendships()
            .then(
                friendships => dispatch(receiveAllFriendships(friendships)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteFriendship = (friendshipId) => (dispatch) => {
    return (
        FriendshipAPIUtil.deleteFriendship(friendshipId)
            .then(
                friendship => dispatch(deleteFriendshipObj(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}