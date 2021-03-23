import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions';
import PostCreate from './post_create'
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer
    }
}

const mDTP = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(PostCreate);