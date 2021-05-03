import { RECEIVE_LIKE, DELETE_LIKE } from '../actions/like_actions'
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';


export const likeReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    let likes;
    switch (action.type){
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case DELETE_LIKE: 
            delete newState[action.like.id];
            return newState;
        case RECEIVE_ALL_POSTS:
            if(action.posts.likes){
                Object.values(action.posts.likes).forEach(like => {
                    newState[like.id] = like
                })
            }
            return newState;
        // case DELETE_POST:
        //     let postLikes = getLikesOfLikeable(newState, action.post.id, 'Post');
        //     let commentLikes = getLikesFromComments(newState, action.comments)
        //     likes = postLikes.concat(commentLikes);
        //     likes.forEach(like => {
        //         delete newState[like.id];
        //     })
        //     return newState;
        case DELETE_COMMENT:
            action.comment.likes.forEach(like => {
                delete newState[like.id];
            })
            return newState;
        default:
            return state;
            
    }
}