import * as CommentAPIUtil from "../util/comment_api_util";
import { receiveErrors } from './session_action';


export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const POST_COMMENTS = "POST_COMMENTS";

const receiveComment = comment => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    })
}

const receiveAllComments = comments => {
    return ({
        type: RECEIVE_ALL_COMMENTS,
        comments
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

export const fetchAllComments = () => dispatch => {
    return (
        CommentAPIUtil.allComments()
        .then(
            comments => dispatch(receiveAllComments(comments)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
    )
}

export const fetchPostComments = postId => dispatch => {
    return (
        CommentAPIUtil.postComments(postId)
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

export const deleteComment = commentId => dispatch => {
    return (
        CommentAPIUtil.deleteComment(commentId)
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