import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import root_reducer from './reducers/index.js';

const initial_state = {};

const middleware = [thunk];

const store = createStore(
	root_reducer,
	initial_state,
	applyMiddleware(...middleware)
);

export default store;