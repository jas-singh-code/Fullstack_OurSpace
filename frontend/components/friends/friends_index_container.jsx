import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendships_actions';
import { sendFriendRequest } from '../../actions/friend_request_actions';
import FriendsIndex from './friends_index';

const mSTP = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        requests: state.entities.friendRequests,
        friends: state.entities.friendships,
        users: state.entities.users,
        user: ownProps.user
    }
}

const mDTP = dispatch => {
    return {
        createFriendship: friendShip => dispatch(createFriendship(friendShip)),
        deleteRequest: friendRequest => dispatch(deleteFriendRequest(friendRequest)),
        sendRequest: friendRequest => dispatch(sendFriendRequest(friendRequest))
    }
}

export default connect (mSTP, mDTP)(FriendsIndex);