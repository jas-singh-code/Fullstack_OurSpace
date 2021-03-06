import { connect } from 'react-redux';
import { fetchPostComments, postComment, fetchAllComments } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { createLike, deleteLike, fetchAllLikes } from '../../actions/like_actions';
import { getUsers } from '../../actions/user_actions';
import { fetchAllFriendRequests } from '../../actions/friend_request_actions';
import { fetchAllFriendships } from '../../actions/friendships_actions';

const mSTP = ( state ) => {
    return{
        posts: state.entities.posts,
        currentUser: state.session.currentUser,
        comments: state.entities.comments,
        users: state.entities.users,
        likes: state.entities.likes
    }
}
const mDTP = dispatch => {
    return {
        getAllPosts: () => dispatch(fetchPosts()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        openCreatePost: () => dispatch(openModal('createPost')),
        fetchComments: postId => dispatch(fetchPostComments(postId)),
        createComment: comment => dispatch(postComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
        fetchAllUsers: () => dispatch(getUsers()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllRequests: () => dispatch(fetchAllFriendRequests()),
        fetchAllFriendships: () => dispatch(fetchAllFriendships())
    }
}

export default connect (mSTP, mDTP)(PostIndex);