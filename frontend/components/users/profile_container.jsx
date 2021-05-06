import { connect } from 'react-redux';
import Profile from './profile';
import { editUser } from '../../actions/user_actions';


const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        users: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(Profile);