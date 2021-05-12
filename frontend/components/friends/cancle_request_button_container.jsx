import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendships_actions';
import { sendFriendRequest, deleteFriendRequest } from '../../actions/friend_request_actions';
import CancleRequestButton from './cancle_request_button';

const mSTP = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        requests: state.entities.friendRequests,
        userId: ownProps.userId
    }
}

const mDTP = dispatch => {
    return {
        createFriendship: friendShip => dispatch(createFriendship(friendShip)),
        deleteRequest: friendRequest => dispatch(deleteFriendRequest(friendRequest)),
        sendRequest: friendRequest => dispatch(sendFriendRequest(friendRequest))
    }
}

export default connect(mSTP, mDTP)(CancleRequestButton);