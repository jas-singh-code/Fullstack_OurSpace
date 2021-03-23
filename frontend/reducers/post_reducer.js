import { RECEIVE_POSTS, RECEIVE_SINGLE_POST, DELETE_POST } from "../actions/post_actions";

const _nullPosts = {
    posts: null
}

export default (state= _nullPosts, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = {};
            action.posts.forEach(post => {
                posts[post.id] = post;
            });
            return posts;
        case RECEIVE_SINGLE_POST:
            return Object.assign( {}, state, { [action.post.id]: action.post });
        case DELETE_POST:
            return _nullPosts
        default:
            return state;
    }
}