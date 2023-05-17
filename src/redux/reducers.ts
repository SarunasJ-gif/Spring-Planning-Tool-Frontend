import { combineReducers } from 'redux';
import newSprintReducer from './NewSprint/NewSprintReducer';

import ManageTeamReducer from './ManageTeam/ManageTeamReducer';
import SprintReducer from './Sprint/SprintReducer';

const reducers = combineReducers({ newSprint: newSprintReducer, manageTeam: ManageTeamReducer, sprint:SprintReducer });

export default reducers;
