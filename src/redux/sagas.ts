import { all } from 'redux-saga/effects';
import newSprintSaga from './NewSprint/NewSprint.sagas';
import newSprintsSaga from './Sprints/Sprints.sagas';
import { getSprintSaga } from './Sprint/Sprint.sagas';
import SprintSaga from './Sprint/Sprint.sagas';
import ManageTeamSaga from './ManageTeam/ManageTeam.sagas';

export default function* rootSaga() {
    yield all([newSprintSaga(), newSprintsSaga(), getSprintSaga(), ManageTeamSaga(), SprintSaga()]);
}