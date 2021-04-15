import { RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, DELETE_POST, CLEAR_POSTS } from "../actions/post_actions";


export default (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            Object.values(action.posts).forEach(post => {
                newState[post.id] = post;
            });
            return newState ;
        case RECEIVE_SINGLE_POST:
            newState[action.post.id] = action.post;
            return newState;
        case DELETE_POST:
            delete newState[action.post.id];
            return newState;
        case CLEAR_POSTS:
            return {};
        default:
            return state;
    }
}

// export default (state = {}, action) => {
//     let postsReturn = {};
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_ALL_POSTS:
//             Object.values(action.posts).forEach(post => {
//                 postsReturn[post.id] = post;
//             });
//             return postsReturn ;
//         case RECEIVE_SINGLE_POST:
//             return Object.assign( {}, state, action.post);
//         case DELETE_POST:
//             return {}
//         default:
//             return state;
//     }
// }