import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_action'


const _nullErrors = {
    errors: null
}

const session = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, { errors: actions.errors });
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return state;
    }
}

export default session;