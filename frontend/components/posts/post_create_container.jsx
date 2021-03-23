import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/post_actions';
import PostCreate from './post_create'

const mSTP = (state, ownProps) => {
    return {
        post: {
            message: '',
            image_url:'',
            poster_id: [state.session.currentUser.id]
        }
    }
}

const mDTP = dispatch => {
    return {
        createPost: post => dispatch(createPost(post))
    }
}

export default connect(mSTP, mDTP)(PostCreate);