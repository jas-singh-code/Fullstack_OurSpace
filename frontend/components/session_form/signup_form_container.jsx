import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_action';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
    return {
        errors: errors.sessionErrorsReducer
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal())
    }
}
export default connect(mSTP, mDTP)(SignupForm);