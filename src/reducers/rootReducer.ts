import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import typeSlice from './task/typeSlice'

export default combineReducers({ user: userReducer, task: typeSlice});
