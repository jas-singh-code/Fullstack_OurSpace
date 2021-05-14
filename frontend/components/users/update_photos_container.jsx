import { connect } from 'react-redux';
import UpdatePhotos from './update_photos';
import { updateUserPhoto, editUser } from '../../actions/user_actions';
import { Router, Route, Switch } from "react-router";

const mSTP = (state, ownProps) => {
    return {
        users: state.entities.users,
        type: ownProps.type,
        currentUser: state.session.currentUser
    }
}

const mDTP = (dispatch) => {
    return {
        editUser: data => dispatch(editUser(data)),
        updateUserPhoto: formData => dispatch(updateUserPhoto(formData)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(UpdatePhotos);