import { connect } from 'react-redux';
import { deletePost, fetchPosts, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';

const mSTP = ({ entities }) => {
    return{
        posts: entities.posts
    }
}

const mDTP = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        updatePost: post => dispatch(updatePost(post)),
        deletePost: post => dispatch(deletePost(post))
    }
}

export default connect (mSTP, mDTP)(PostIndex);