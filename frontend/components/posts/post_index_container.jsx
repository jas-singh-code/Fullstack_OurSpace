import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mSTP = ( state ) => {
    return{
        posts: state.entities.posts,
        currentUser: state.session.currentUser,
    }
}
const mDTP = dispatch => {
    return {
        getAllPosts: () => dispatch(fetchPosts()),
        openCreatePost: () => dispatch(openModal('createPost'))
    }
}

export default connect (mSTP, mDTP)(PostIndex);