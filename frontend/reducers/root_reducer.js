import { combineReducers } from 'redux';
// import entities from './entities_reducer.js';
import ui from './ui_reducer';
import sessionReducer from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
//   entities,
  sessionReducer,
  ui,
  errors
});

export default rootReducer;