import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendships_actions';
import { deleteFriendRequest } from '../../actions/friend_request_actions';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_action';
import Notifications from './notifications';


const mSTP = state => {
    return{
        currentUser: state.session.currentUser,
        requests: state.friendRequests,
        users : state.entities.users,
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        create: () => dispatch(openModal('createPost')),
        createFriendship: friendship => dispatch(createFriendship(friendship)),
        deleteFriendRequest: friendRequestId => dispatch(deleteFriendRequest(friendRequestId))
    }
}

export default connect (mSTP, mDTP)(Notifications);