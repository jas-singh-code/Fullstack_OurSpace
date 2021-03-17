import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_action';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login">Login</Link>
    }
}

const mDTP = dispatch => {
    return {
        processFrom: (user) => dispatch(signup(user)),
    }
}
export default connect(mSTP, mDTP)(SessionForm);