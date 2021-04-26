import * as CommentAPIUtil from "../util/comment_api_util";
import { receiveErrors } from './session_action';


export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const receiveComment = comment => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    })
}

const destroyComment = comment => {
    return ({
        type: DELETE_COMMENT,
        comment
    })
}

export const postComment = comment => dispatch => {
    return (
        CommentAPIUtil.postComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
    )
}

export const deleteComment = comment => dispatch => {
    return (
        CommentAPIUtil.deleteComment(comment)
        .then(
            comment => dispatch(destroyComment(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}