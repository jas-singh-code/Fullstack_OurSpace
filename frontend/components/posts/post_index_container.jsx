import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mSTP = ( state ) => {
    // debugger
    return{
        // posts2: Object.values(state.entities.posts),
        // posts: Object.keys(state.entities.posts).map(key => state.entities.posts[key]),
        posts1: state.entities.posts,
        currentUser: state.session.currentUser,
    }
}
// debugger
const mDTP = dispatch => {
    // debugger
    return {
        getAllPosts: () => dispatch(fetchPosts()),
        openCreatePost: () => dispatch(openModal('createPost'))
    }
}

export default connect (mSTP, mDTP)(PostIndex);