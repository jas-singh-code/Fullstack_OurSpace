import { RECEIVE_POSTS, RECEIVE_SINGLE_POST, DELETE_POST } from "../actions/post_actions";


export default (state = {}, action) => {
    let postsReturn = {};
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_POSTS:
            Object.values(action.posts).forEach(post => {
                postsReturn[post.id] = post;
            });
            return postsReturn ;
        case RECEIVE_SINGLE_POST:
            return Object.assign( {}, state, action.post);
        case DELETE_POST:
            return {}
        default:
            return state;
    }
}