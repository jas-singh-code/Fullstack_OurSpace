import { connect } from 'react-redux';
import React from 'react';
import Comment from './comment';
import { deleteComment, postComment } from '../../actions/comment_action';


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(postComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment))
    }
}

export default connect(mSTP, mDTP)(Comment);