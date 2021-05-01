import { connect } from 'react-redux';
import React from 'react';
import { deleteComment, postComment, fetchPostComments} from '../../actions/comment_action';
import CommentIndex from './comment_index';


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
        currentUser: state.session.currentUser
    })


}

const mDTP = dispatch => {
    return {
        fetchPostComments: postId => dispatch(fetchPostComments(postId)),
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndex);