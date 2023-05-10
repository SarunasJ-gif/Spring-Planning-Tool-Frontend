import { all } from 'redux-saga/effects';
import  newSprintSaga  from './NewSprint/NewSprint.sagas';
import  ManageMemberSaga  from './ManageMember/ManageMember.sagas';
import  ManageTeamSaga from './ManageTeam/ManageTeam.sagas';


export default function* rootSaga() {
    yield all([newSprintSaga(), ManageTeamSaga(), ManageMemberSaga()]);
}