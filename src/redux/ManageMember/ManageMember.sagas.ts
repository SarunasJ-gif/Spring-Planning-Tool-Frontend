import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_TEAM_MEMBER, GET_MEMBER_REQUEST, REMOVE_TEAM_MEMBER, UPDATE_MEMBER_ROLE } from './ManageMemberActionType';
import {  addTeamMember, getMembers, removeTeamMember, updateTeamMemberRole } from './ManageMemberApi';
import { getMembersOk, removeTeamMemberSuccess } from './ManageMemberActions';
import { Member } from '../../types/TeamTypes';

export function* getMembersSaga() {
  try {
    const members: Member[] = yield call(getMembers);
      yield put(getMembersOk(members));
  } catch (e) { console.error(e); }}

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
  yield takeLatest(GET_MEMBER_REQUEST, getMembersSaga); // all ussers
  yield takeLatest(ADD_TEAM_MEMBER, addTeamMemberSaga); //team
  yield takeLatest(UPDATE_MEMBER_ROLE, updateMemberRoleSaga); //team
  yield takeLatest(REMOVE_TEAM_MEMBER, removeTeamMemberSaga); //team
}







