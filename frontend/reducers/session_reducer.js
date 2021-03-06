import { 
    LOGOUT_CURRENT_USER,
     RECEIVE_CURRENT_USER
    } from "../actions/session_action";

const _nullSession = {
    currentUser: null
}
const sessionReducer = (state=_nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUser: action.currentUser}
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}

export default sessionReducer;