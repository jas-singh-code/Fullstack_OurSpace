import { RECEIVE_COMMENT, DELETE_COMMENT, POST_COMMENTS, RECEIVE_ALL_COMMENTS } from "../actions/comment_action";
import { DELETE_LIKE, RECEIVE_LIKE } from "../actions/like_actions";
import { DELETE_POST, RECEIVE_ALL_POSTS } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:
            delete newState[action.comment.id];
            return newState;
        case POST_COMMENTS:
            Object.values(action.comments).forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        case RECEIVE_ALL_COMMENTS:
            Object.values(action.comments).forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        case RECEIVE_LIKE:
            if(action.like.likeable_type === "Comment"){
                const commentId = action.like.likeable_id;
                newState[commentId]['likes'][action.like.id] = action.like
            }
            return newState;
        case DELETE_LIKE:
            if(action.like.likeable_type === "Comment"){
                const commentId2 = action.like.likeable_id;
                delete newState[commentId2]['likes'][action.like.id];
            }
            return newState;
        default:
            return state;
    }
}
export default commentsReducer;