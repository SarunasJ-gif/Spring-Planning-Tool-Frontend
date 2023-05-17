import { combineReducers } from 'redux';
import userReducer from '../redux/user/userReducer';
import newSprintReducer from './NewSprint/NewSprintReducer';
import SprintReducer from './Sprint/SprintReducer';
import SprintsReducer from './Sprints/SprintsReducer';

const reducers = combineReducers({
  user: userReducer,
  newSprint: newSprintReducer,
  sprint: SprintReducer,
  sprints: SprintsReducer
});

export default reducers;
