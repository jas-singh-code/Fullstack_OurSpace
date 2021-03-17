import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_action';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    }
}
export default connect(mSTP, mDTP)(SignupForm);