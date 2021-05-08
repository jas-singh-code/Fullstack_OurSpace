import { connect } from 'react-redux';
import { createFriendship } from '../../actions/friendships_actions';
import { sendFriendRequest } from '../../actions/friend_request_actions';
import AddFriendButton from './add_friend_button';

const mSTP = state => {
    return{
        currentUser: state.session.currentUser
    }
}

const mDTP = dispatch => {
    return {
        createFriendship: friendShip => dispatch(createFriendship(friendShip)),
        deleteRequest: friendRequest => dispatch(deleteFriendRequest(friendRequest)),
        sendRequest: friendRequest => dispatch(sendFriendRequest(friendRequest))
    }
}

export default connect (mSTP, mDTP)(AddFriendButton);