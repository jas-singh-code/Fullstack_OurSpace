import { connect } from 'react-redux';
import { fetchPostComments, postComment } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { createLike, deleteLike } from '../../actions/like_actions';

const mSTP = ( state ) => {
    return{
        posts: state.entities.posts,
        currentUser: state.session.currentUser,
        comments: state.entities.comments,
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
        deleteLike: like => dispatch(deleteLike(like))
    }
}

export default connect (mSTP, mDTP)(PostIndex);