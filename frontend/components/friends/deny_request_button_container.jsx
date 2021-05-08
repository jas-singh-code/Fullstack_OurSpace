import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendships_actions';
import { sendFriendRequest } from '../../actions/friend_request_actions';
import DenyRequestButton from './deny_request_button';

const mSTP = state => {
    return{
        currentUser: state.session.currentUser,
        requests: state.entities.friendRequests
    }
}

const mDTP = dispatch => {
    return {
        createFriendship: friendShip => dispatch(createFriendship(friendShip)),
        deleteRequest: friendRequest => dispatch(deleteFriendRequest(friendRequest)),
        sendRequest: friendRequest => dispatch(sendFriendRequest(friendRequest))
    }
}

export default connect (mSTP, mDTP)(DenyRequestButton);