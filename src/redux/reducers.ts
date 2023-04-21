import { combineReducers } from 'redux';
import userReducer from '../redux/user/userReducer';
import typeSlice from '../redux/task/typeSlice'

const reducers = combineReducers({ user: userReducer, task: typeSlice});

export default reducers;
