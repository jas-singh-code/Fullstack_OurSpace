import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_action';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(login(user)),
      otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Signup
        </button>
      ),
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);