import { combineReducers } from 'redux';
import newSprintReducer from "./NewSprint/NewSprintReducer";
import newTeamReducer from "./NewTeam/NewTeamReducer";
import newMemberReducer from "./NewMember/NewMemberReducer";

const reducers = combineReducers({ newSprint: newSprintReducer, newTeam: newTeamReducer, newMember: newMemberReducer });

export default reducers;
