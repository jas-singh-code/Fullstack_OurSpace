import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../actions/friendships_actions';
import { findFriendshipId } from './selectors'; 

export const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_FRIENDSHIP:
            newState[action.friendship.id] = action.friendship;
            return newState;
        case DELETE_FRIENDSHIP:
            let correspondingFriendship = findFriendshipId(newState, action.friendship.friend_id, action.friendship.user_id);
            if (correspondingFriendship){
                delete newState[correspondingFriendship];
            }
            delete newState[action.friendship.id]
            return newState;
        default:
            return state;
    }
}