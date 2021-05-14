import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session_form/signup_form_container';
import PostCreateContainer from '../posts/post_create_container';
import UpdateCoverPhoto from '../users/update_photos_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'createPost':
      component = <PostCreateContainer />;
      break;
    case 'UpdateCoverPhoto':
      component = <UpdateCoverPhoto type='CoverPhoto'/>
      break;
    case 'UpdateProfilePhoto':
      component = <UpdateCoverPhoto type='ProfilePhoto'/>
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);