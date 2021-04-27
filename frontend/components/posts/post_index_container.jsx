import { connect } from 'react-redux';
import { fetchPostComments, postComment } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';

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
    }
}

export default connect (mSTP, mDTP)(PostIndex);