import { combineReducers } from 'redux';
import newSprintReducer from './NewSprint/NewSprintReducer';
import manageMemberReducer from './ManageMember/ManageMemberReducer';
import ManageTeamReducer from './ManageTeam/ManageTeamReducer';
import SprintReducer from './Sprint/SprintReducer';

const reducers = combineReducers({ newSprint: newSprintReducer, manageMember: manageMemberReducer, manageTeam: ManageTeamReducer, sprint:SprintReducer });

export default reducers;
