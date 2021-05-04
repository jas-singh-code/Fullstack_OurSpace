import * as LikeAPIUtil from '../util/like_api_util';
import { receiveErrors } from './session_action';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = (like) => {
    return ({
        type: RECEIVE_LIKE,
        like
    })
}

const receiveAllLikes = (likes) => {
    return ({
        type: RECEIVE_ALL_LIKES,
        likes
    })
}

const deleteLikeObj = (like) => {
    return ({
        type: DELETE_LIKE,
        like
    })
}

export const createLike = like => dispatch => {
    return (
        LikeAPIUtil.createLike(like)
            .then(
                like => dispatch(receiveLike(like)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteLike = (likeId) => (dispatch) => {
    return (
        LikeAPIUtil.deleteLike(likeId)
            .then(
                like => dispatch(deleteLikeObj(like)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const fetchAllLikes = () => dispatch => {
    return (
        LikeAPIUtil.allLikes()
        .then(
            likes => dispatch(receiveAllLikes(likes)),
            err => dispatch(receiveErrors(err))
        )
    )
}