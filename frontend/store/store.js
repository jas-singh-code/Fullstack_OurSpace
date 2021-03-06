import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export default (preloadedState = {}) => createStore(
    rootReducer, preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

