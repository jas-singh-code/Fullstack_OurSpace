import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import postErrorsReducer from './post_errors_reducer';

export default combineReducers({
    sessionErrorsReducer: sessionErrorsReducer,
    postErrorsReducer: postErrorsReducer
});