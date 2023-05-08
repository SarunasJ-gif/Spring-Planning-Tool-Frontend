import { combineReducers } from 'redux';

import newSprintReducer from "./NewSprint/NewSprintReducer";
import newTeamReducer from "./NewTeam/NewTeamReducer";

const reducers = combineReducers({ newSprint: newSprintReducer, newTeam: newTeamReducer });

export default reducers;
