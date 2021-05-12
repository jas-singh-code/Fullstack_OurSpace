import { connect } from 'react-redux';
import Profile from './profile';
import { editUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(7);
    const userObj = state.entities.users[id];
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        users: state.entities.users,
        user: userObj,
        requests: state.entities.friendRequests
    }
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(Profile);