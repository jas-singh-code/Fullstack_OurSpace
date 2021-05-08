import { RECEIVE_FRIEND_REQUEST, DELETE_FRIEND_REQUEST } from '../actions/friend_request_actions';
import { RECEIVE_FRIENDSHIP } from '../actions/friendships_actions';
import { findRequestId } from './selectors';

export const friendRequestReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_FRIEND_REQUEST:
            nextState[action.friendRequest.id] = action.friendRequest;
            return nextState;
        case DELETE_FRIEND_REQUEST:
            delete nextState[action.friendRequest.id];
            return nextState;
        case RECEIVE_FRIENDSHIP:
            const requestId = findRequestId(nextState, action.friendship.friend_id, action.friendship.user_id);
            delete nextState[requestId];
            return nextState;
        default:
            return state;
    }
}