import { connect } from 'react-redux';
import UserPosts from './user_posts';

import { fetchPostComments, postComment, fetchAllComments } from '../../actions/comment_action';
import { openModal } from '../../actions/modal_actions';
import { destroyPost, fetchPosts, updatePost } from '../../actions/post_actions';
import { createLike, deleteLike, fetchAllLikes } from '../../actions/like_actions';
import { getUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        userId: ownProps.userId,
        posts: state.entities.posts,
        comments: state.entities.comments,
        users: state.entities.users,
        likes: state.entities.likes
    }
}

const mDTP = (dispatch) => {
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
        fetchAllLikes: () => dispatch(fetchAllLikes())    }
}

export default connect(mSTP, mDTP)(UserPosts);