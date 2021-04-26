import { RECEIVE_COMMENT, DELETE_COMMENT } from "../actions/comment_action";
import { DELETE_POST } from "../actions/post_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            if(action.comments){
                Object.assign(action.comments).forEach(comment => {
                   newState[comment.id] = comment
                })
            }
            return newState;
        case DELETE_POST:
            if (action.comments){
                action.comments.forEach(commentId => {
                    delete newState[commentId]
                })
            }
            return newState;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:
            delete newState[action.comment.id];
            return newState;    
        default:
            return state;
    }
}
export default commentsReducer;