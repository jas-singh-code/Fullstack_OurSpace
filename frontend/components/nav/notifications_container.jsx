import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_action';
import Notifications from './notifications';


const mSTP = state => {
    return{
        currentUser: state.session.currentUser,
        requests: state.friendRequests
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        create: () => dispatch(openModal('createPost'))
    }
}

export default connect (mSTP, mDTP)(Notifications);