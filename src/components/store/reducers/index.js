import {combineReducers} from 'redux';
import vehicles_reducer from './vehicles_reducer.js';

const root_reducer = combineReducers({
	vehs: vehicles_reducer
});

export default root_reducer;