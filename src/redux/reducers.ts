import { combineReducers } from 'redux';
import userReducer from '../redux/user/userReducer';
import newSprintReducer from "./NewSprint/NewSprintReducer";
import newTeamReducer from "./NewTeam/NewTeamReducer";

const reducers = combineReducers({ user: userReducer, newSprint: newSprintReducer, newTeam: newTeamReducer });

export default reducers;
