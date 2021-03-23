import { RECEIVE_POSTS, RECEIVE_SINGLE_POST, DELETE_POST } from "../actions/post_actions";


export default (state = {}, action) => {
    let posts = {};
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            debugger;
            action.posts.forEach(post => {
                posts[post.id] = post;
            });
            return posts;
        case RECEIVE_SINGLE_POST:
            debugger;
            return Object.assign( {}, state, action.post);
        case DELETE_POST:
            return {}
        default:
            return state;
    }
}