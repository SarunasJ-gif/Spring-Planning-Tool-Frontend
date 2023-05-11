import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MEMBER_REQUEST, UPDATE_MEMBER_ROLE } from './ManageMemberActionType';
import { getMembersAPI, updateTeamMemberRoleAPI } from './ManageMemberApi';
import { getMembersSuccess } from './ManageMemberActions';
import { Member } from '../../types/TeamTypes';

export function* getMembersSaga() {
  try {
    const members: Member[] = yield call(getMembersAPI);
      yield put(getMembersSuccess(members));
  } catch (e) { console.error(e); }}

  export function* updateMemberRoleSaga(action: any) {
    try {
      const { memberId, role } = action.payload;
      yield call(updateTeamMemberRoleAPI, memberId, role);
      yield put({ type: action.UPDATE_MEMBER_ROLE, payload: { memberId, role } });
    } catch (e) {console.error(e);}
  }

export default function* newTeamSaga() {
  yield takeLatest(GET_MEMBER_REQUEST, getMembersSaga); 
  yield takeLatest(UPDATE_MEMBER_ROLE, updateMemberRoleSaga);
}







