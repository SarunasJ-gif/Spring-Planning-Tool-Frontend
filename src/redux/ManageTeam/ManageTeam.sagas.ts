import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_TEAM_MEMBER, GET_TEAM_DATA_REQUEST, REMOVE_TEAM_MEMBER, UPDATE_MEMBER_ROLE, UPDATE_TEAM_NAME } from './ManageTeamActionType';
import { addTeamMember, getTeamDataAPI, removeTeamMember, updateTeamMemberRole, updateTeamNameAPI } from './ManageTeamApi';
import { getTeamDataSuccess, removeTeamMemberSuccess, updateTeamName } from './ManageTeamActions';
import { Team } from '../../types/TeamTypes';

export function* getTeamDataSaga() {
  try {
    const teams: Team[] = yield call(getTeamDataAPI);
    console.log('gauta sagu endpointe teamu masyvas', teams);
      yield put(getTeamDataSuccess(teams));
  } catch (e) { console.error(e);}
}

export function* updateTeamNameSaga(action: any) {
  try {
    const { teamId, newName } = action.payload;
    yield call(updateTeamNameAPI, teamId, newName);
    yield put(updateTeamName(teamId, newName));
  } catch (e) {
    console.error(e);
  }
}

export function* addTeamMemberSaga(action: any) {
  try {
    const { memberId } = action.payload;
    yield call(addTeamMember, memberId);
  } catch (e) {console.error(e);}
}

export function* updateMemberRoleSaga(action: any) {
  try {
    const { memberId, role } = action.payload;
    yield call(updateTeamMemberRole, memberId, role);
    yield put({ type: action.UPDATE_MEMBER_ROLE, payload: { memberId, role } });
  } catch (e) {console.error(e);}
}

function* removeTeamMemberSaga(action: any) {
  try {
    const { memberId } = action.payload;
    yield call(removeTeamMember, memberId);
    yield put(removeTeamMemberSuccess(memberId));
  }  catch (e) { console.error(e);}
}

export default function* newTeamSaga() {
  yield takeLatest(GET_TEAM_DATA_REQUEST, getTeamDataSaga);
  yield takeLatest(UPDATE_TEAM_NAME, updateTeamNameSaga); 
  yield takeLatest(ADD_TEAM_MEMBER, addTeamMemberSaga); 
  yield takeLatest(UPDATE_MEMBER_ROLE, updateMemberRoleSaga);
  yield takeLatest(REMOVE_TEAM_MEMBER, removeTeamMemberSaga); 
}







