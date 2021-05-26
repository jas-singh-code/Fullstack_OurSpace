import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendships_actions';
import { sendFriendRequest } from '../../actions/friend_request_actions';
import RemoveFriendButton from './remove_friend_button';

const mSTP = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        requests: state.entities.friendRequests,
        friendships: state.entities.friendships,
        userId: ownProps.user.id
    }
}

const mDTP = dispatch => {
    return {
        createFriendship: friendShip => dispatch(createFriendship(friendShip)),
        deleteRequest: friendRequest => dispatch(deleteFriendRequest(friendRequest)),
        sendRequest: friendRequest => dispatch(sendFriendRequest(friendRequest))
    }
}

export default connect (mSTP, mDTP)(RemoveFriendButton);