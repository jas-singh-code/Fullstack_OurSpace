import { connect } from 'react-redux';
import { fetchPostComments, postComment } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { createLike, deleteLike, fetchAllLikes } from '../../actions/like_actions';
import { getUsers } from '../../actions/user_actions';

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
        openCreatePost: () => dispatch(openModal('createPost')),
        fetchComments: postId => dispatch(fetchPostComments(postId)),
        createComment: comment => dispatch(postComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: like => dispatch(deleteLike(like)),
        fetchAllUsers: () => dispatch(getUsers()),
        fetchAllLikes: () => dispatch(fetchAllLikes())
    }
}

export default connect (mSTP, mDTP)(PostIndex);