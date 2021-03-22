import { RECEIVE_POSTS, RECEIVE_POST } from "../actions/post_actions";

export default (state, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return action.post
        default:
            state;
    }
}