import { connect } from 'react-redux';
import React from 'react';
import { deleteComment, fetchPostComments, editComment} from '../../actions/comment_action';
import CommentIndex from './comment_index';
import { createLike, deleteLike } from '../../actions/like_actions';



const mSTP = (state, ownProps) => {
    let comments = [];
    if (ownProps.post.commentIds){
        ownProps.post.commentIds.forEach(commentId => {
            comments.push(state.entities.comments[commentId])
        })
    }

    return ({
        comments: comments,
        post: ownProps.post,
        currentUser: state.session.currentUser,
        users: state.entities.users,
        likes: state.entities.likes,
        comments: state.entities.comments
    })


}

const mDTP = dispatch => {
    return {
        fetchPostComments: postId => dispatch(fetchPostComments(postId)),
        editComment: comment => dispatch(editComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
    }
}

export default connect(mSTP, mDTP)(CommentIndex);