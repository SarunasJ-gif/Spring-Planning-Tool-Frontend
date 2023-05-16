import { all } from 'redux-saga/effects';
import  newSprintSaga  from './NewSprint/NewSprint.sagas';
import { getSprintSaga } from './Sprint/Sprint.sagas';
import  SprintSaga  from './Sprint/Sprint.sagas';
import  ManageMemberSaga  from './ManageMember/ManageMember.sagas';
import  ManageTeamSaga from './ManageTeam/ManageTeam.sagas';

export default function* rootSaga() {
    yield all([newSprintSaga(), getSprintSaga(), ManageTeamSaga(), ManageMemberSaga(), SprintSaga()]);
}