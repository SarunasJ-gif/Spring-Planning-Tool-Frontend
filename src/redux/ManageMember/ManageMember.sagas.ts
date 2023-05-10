import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MEMBER_REQUEST } from './ManageMemberActionType';
import { getMembers } from './ManageMemberApi';
import { getMembersSuccess } from './ManageMemberActions';
import { Member } from '../../types/TeamTypes';

export function* getMembersSaga() {
  try {
    const members: Member[] = yield call(getMembers);
      yield put(getMembersSuccess(members));
  } catch (e) { console.error(e); }}

export default function* newTeamSaga() {
  yield takeLatest(GET_MEMBER_REQUEST, getMembersSaga); // all ussers

}







