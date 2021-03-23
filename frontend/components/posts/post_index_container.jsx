import { connect } from 'react-redux';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mSTP = ({ entities }) => {
    return{
        posts: entities.posts
    }
}
// debugger
const mDTP = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        updatePost: post => dispatch(updatePost(post)),
        destroyPost: post => dispatch(destroyPost(post))
    }
}

export default connect (mSTP, mDTP)(PostIndex);