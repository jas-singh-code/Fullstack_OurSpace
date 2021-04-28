import { connect } from 'react-redux';
import React from 'react';
import { deleteComment, postComment } from '../../actions/comment_action';
import CommentIndex from './comment_index';


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        post: state.entities.posts[ownProps.post.id]
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(postComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment))
    }
}

export default connect(mSTP, mDTP)(CommentIndex);