import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mSTP = ( state ) => {
    debugger
    return{
        // posts: Object.values(state.entities.posts),
        posts: state.entities.posts,
        currentUser: state.session.currentUser,
    }
}
// debugger
const mDTP = dispatch => {
    return {
        openCreatePost: () => dispatch(openModal('createPost')),
        fetchPosts: () => dispatch(fetchPosts()),
        updatePost: post => dispatch(updatePost(post)),
        destroyPost: post => dispatch(destroyPost(post))
    }
}

export default connect (mSTP, mDTP)(PostIndex);