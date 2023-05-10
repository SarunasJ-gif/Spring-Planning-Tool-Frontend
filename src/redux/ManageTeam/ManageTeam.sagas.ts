import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_TEAM_MEMBER, GET_TEAM_DATA, REMOVE_TEAM_MEMBER_REQUEST, UPDATE_MEMBER_ROLE, UPDATE_TEAM_NAME } from './ManageTeamActionType';
import { addTeamMember, getTeamData, updateTeamMemberRole, updateTeamNameAPI } from './ManageTeamApi';
import { removeTeamMemberRequest, removeTeamMemberSuccess, updateTeamName } from './ManageTeamActions';

export function* getTeamDataSaga() {
  try {
      yield call(getTeamData);
  } catch (e) {
    console.error(e);
}
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
    yield call(removeTeamMemberRequest, memberId);
    yield put(removeTeamMemberSuccess(memberId));
  }  catch (e) { console.error(e);}
}

export default function* newTeamSaga() {
  yield takeLatest(GET_TEAM_DATA, getTeamDataSaga);
  yield takeLatest(UPDATE_TEAM_NAME, updateTeamNameSaga); 
  yield takeLatest(ADD_TEAM_MEMBER, addTeamMemberSaga); 
  yield takeLatest(UPDATE_MEMBER_ROLE, updateMemberRoleSaga);
  yield takeLatest(REMOVE_TEAM_MEMBER_REQUEST, removeTeamMemberSaga); 
}







