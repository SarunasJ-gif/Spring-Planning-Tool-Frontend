import { all } from 'redux-saga/effects';
import  newSprintSaga  from './NewSprint/NewSprint.sagas';
import  newMemberSaga  from './ManageMember/ManageMember.sagas';
import  newTeamSaga from './ManageTeam/ManageTeam.sagas';


export default function* rootSaga() {
    yield all([newSprintSaga(), newTeamSaga(), newMemberSaga()]);
}