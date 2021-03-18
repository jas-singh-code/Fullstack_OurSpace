import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_action';
import { openModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    signupFormButton: (
      <button className="btn-signup" onClick={() => dispatch(openModal('signup'))}>
        Create New Account
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);