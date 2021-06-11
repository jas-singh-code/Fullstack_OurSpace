import { connect } from 'react-redux';
import Profile from './profile';

import { editUser, updateUserPhoto, getUsers} from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { deleteFriendship, fetchAllFriendships} from '../../actions/friendships_actions';
import { getFriendships } from '../../reducers/selectors';
import { fetchPosts} from '../../actions/post_actions';
import { fetchAllLikes} from '../../actions/like_actions';
import { fetchAllFriendRequests } from '../../actions/friend_request_actions';
import { fetchAllComments } from '../../actions/comment_action';


const mSTP = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(7);
    const userObj = state.entities.users[id];
    const friendshipIds = getFriendships(state.session.currentUser.id, state.entities.friendships);
    const friends = {};
    friendshipIds.forEach(obj => {
        friends[obj.id] = obj
    })
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        users: state.entities.users,
        user: userObj,
        requests: state.entities.friendRequests,
        friends: friends,
        friendships: state.entities.friendships
    }
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data)),
        updateUserPhoto: formData => dispatch(updateUserPhoto(formData)),
        openUpdateCoverPhoto: () => dispatch(openModal('UpdateCoverPhoto')),
        openUpdateProfilePhoto: () => dispatch(openModal('UpdateProfilePhoto')),
        deleteFriendship: id => dispatch(deleteFriendship(id)),

        getAllPosts: () => dispatch(fetchPosts()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllUsers: () => dispatch(getUsers()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllRequests: () => dispatch(fetchAllFriendRequests()),
        fetchAllFriendships: () => dispatch(fetchAllFriendships())
    }
}

export default connect(mSTP, mDTP)(Profile);