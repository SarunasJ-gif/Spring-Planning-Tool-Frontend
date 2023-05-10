import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_TEAM_MEMBER, GET_MEMBER, REMOVE_TEAM_MEMBER, UPDATE_MEMBER_ROLE } from './NewMemberActionType';
import {  addTeamMember, getMembers, removeTeamMember, updateTeamMemberRole } from './NewMemberApi';
import { getMembersOk, removeTeamMemberSuccess } from './NewMemberActions';
import { Member } from '../../types/TeamTypes';

export function* getMembersSaga() {
  try {
    console.log('sagas');
    const members: Member[] = yield call(getMembers);
    console.log('memberiai call - ', members);
      yield put(getMembersOk(members));
      console.log('memberiai put - ', members);
  } catch (e) {
    console.error(e);
}
}

export function* updateMemberRoleSaga(action: any) {
  try {
    const { memberId, role } = action.payload;
    yield call(updateTeamMemberRole, memberId, role);
    yield put({ type: action.UPDATE_MEMBER_ROLE, payload: { memberId, role } });
  } catch (e) {
    console.error(e);
  }
}

function* removeTeamMemberSaga(action: any) {
  try {
    const { memberId } = action.payload;
    yield call(removeTeamMember, memberId);
    yield put(removeTeamMemberSuccess(memberId));
  }  catch (e) {
    console.error(e);
  }
}

export function* addTeamMemberSaga(action: any) {
  try {
    const { memberId } = action.payload;
    yield call(addTeamMember, memberId);
  } catch (e) {
    console.error(e);
  }
}

export default function* newTeamSaga() {
  yield takeLatest(GET_MEMBER, getMembersSaga);
  yield takeLatest(UPDATE_MEMBER_ROLE, updateMemberRoleSaga);
  yield takeLatest(REMOVE_TEAM_MEMBER, removeTeamMemberSaga);
  yield takeLatest(ADD_TEAM_MEMBER, addTeamMemberSaga);
}







