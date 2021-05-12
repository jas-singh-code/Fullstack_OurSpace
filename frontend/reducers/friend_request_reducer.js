import { RECEIVE_FRIEND_REQUEST, DELETE_FRIEND_REQUEST } from '../actions/friend_request_actions';
import { RECEIVE_FRIENDSHIP } from '../actions/friendships_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_action';
import { findRequestId } from './selectors';

const friendRequestReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            if(action.currentUser.friend_requests){
                Object.values(action.currentUser.friend_requests).forEach(request => {
                    nextState[request.id] = request;
                });
            }
            return nextState;
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

export default friendRequestReducer;