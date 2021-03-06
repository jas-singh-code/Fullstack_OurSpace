import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP, RECEIVE_ALL_FRIENDSHIPS } from '../actions/friendships_actions';
import { findFriendshipId } from './selectors'; 
import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            if(action.currentUser.friendships){
                Object.values(action.currentUser.friendships).forEach(friendship => {
                    newState[friendship.id] = friendship
                })
            }
            return newState;        
        case RECEIVE_FRIENDSHIP:
            let id2 = action.friendship.id + 1;
            let friendship2 = {
                id: id2,
                user_id: action.friendship.friend_id,
                friend_id: action.friendship.user_id,
                created_at: action.friendship.created_at
            }
            newState[action.friendship.id] = action.friendship;
            newState[`${id2}`] = friendship2;
            return newState;
        case RECEIVE_ALL_FRIENDSHIPS:
            newState = Object.assign({}, action.friendships, newState);
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

export default friendshipReducer;