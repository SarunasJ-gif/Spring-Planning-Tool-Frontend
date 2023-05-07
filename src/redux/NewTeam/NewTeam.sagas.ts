import { call, takeLatest } from 'redux-saga/effects';
import { CREATE_NEW_TEAM, DELETE_TEAM_MEMBER } from './NewTeamActionType';
import { createTeam, deleteTeamMember } from './NewTeamApi';

export function* createTeamSaga(action: any) {
  try {
      yield call(createTeam, action.payload);
  } catch (e) {
    console.error(e);
}
}

export function* deleteTeamMemberSaga(action: any) {
  try {
   
    const { id } = action.payload;
    yield call(deleteTeamMember, id);
  } catch (e) {
    console.error(e);
}
}

export default function* newTeamSaga() {
  yield takeLatest(CREATE_NEW_TEAM, createTeamSaga);
  yield takeLatest(DELETE_TEAM_MEMBER, deleteTeamMemberSaga);
}







