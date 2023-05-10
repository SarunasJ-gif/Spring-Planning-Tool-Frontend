import { combineReducers } from 'redux';
import newSprintReducer from './NewSprint/NewSprintReducer';
import manageMemberReducer from './ManageMember/ManageMemberReducer';
import ManageTeamReducer from './ManageTeam/ManageTeamReducer';

const reducers = combineReducers({ newSprint: newSprintReducer, manageMember: manageMemberReducer, manageTeam: ManageTeamReducer });

export default reducers;
