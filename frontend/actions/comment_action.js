import * as CommentAPIUtil from "../util/comment_api_util";
import { receiveErrors } from './session_action';


export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const POST_COMMENTS = "POST_COMMENTS";

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

const receivePostComments = comments => {
    return ({
        type: POST_COMMENTS,
        comments,
    })
}

export const fetchPostComments = () => dispatch => {
    return (
        CommentAPIUtil.postComments()
        .then(
            comments => dispatch(receivePostComments(comments)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
    )
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
export const editComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.editComment(comment)
            .then(
                comment => dispatch(receiveComment(comment)),
                err => dispatch(receiveErrors(err))
            )
    )
}