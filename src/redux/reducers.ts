import { combineReducers } from 'redux';
import userReducer from '../redux/user/userReducer';
import newSprintReducer from './NewSprint/NewSprintReducer';
import SprintReducer from './Sprint/SprintReducer';

const reducers = combineReducers({
  user: userReducer,
  newSprint: newSprintReducer,
  sprint: SprintReducer,
});

export default reducers;
