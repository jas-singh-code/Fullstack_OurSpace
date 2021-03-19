import { combineReducers } from 'redux';
import ui from './ui_reducer';
import sessionReducer from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: ui,
  errors: errors
});


export default rootReducer;