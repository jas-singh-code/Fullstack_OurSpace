import { connect } from 'react-redux';
import Profile from './profile';
import { editUser, updateUserPhoto } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(7);
    const userObj = state.entities.users[id];
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        users: state.entities.users,
        user: userObj,
        requests: state.entities.friendRequests,
        friends: state.session.currentUser.friends
    }
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data)),
        updateUserPhoto: formData => dispatch(updateUserPhoto(formData)),
        openUpdateCoverPhoto: () => dispatch(openModal('UpdateCoverPhoto')),
        openUpdateProfilePhoto: () => dispatch(openModal('UpdateProfilePhoto'))
    }
}

export default connect(mSTP, mDTP)(Profile);