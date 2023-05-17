import { combineReducers } from 'redux';
import newSprintReducer from './NewSprint/NewSprintReducer';
import ManageTeamReducer from './ManageTeam/ManageTeamReducer';
import SprintReducer from './Sprint/SprintReducer';
import SprintsReducer from './Sprints/SprintsReducer';

const reducers = combineReducers({
  newSprint: newSprintReducer,
  manageTeam: ManageTeamReducer,
  sprint: SprintReducer,
  sprints: SprintsReducer
});

export default reducers;
