import { combineReducers } from 'redux';
import newSprintReducer from './NewSprint/NewSprintReducer';

const reducers = combineReducers({ newSprint: newSprintReducer });

export default reducers;
