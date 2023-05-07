import { all } from 'redux-saga/effects';
import  newSprintSaga  from './NewSprint/NewSprint.sagas';
import  newTeamSaga from './NewTeam/NewTeam.sagas';


export default function* rootSaga() {
    yield all([newSprintSaga(), newTeamSaga()]);
}