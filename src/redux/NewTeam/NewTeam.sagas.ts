import { call, takeLatest } from 'redux-saga/effects';
import { CREATE_NEW_TEAM, REMOVE_TEAM_MEMBER } from './NewTeamActionType';
import { createNewTeam, removeTeamMember } from './NewTeamApi';

export function* createTeamSaga(action: any) {
  try {
      yield call(createNewTeam, action.payload);
  } catch (e) {
    console.error(e);
}
}

export function* deleteTeamMemberSaga(action: any) {
  try {
   
    const { id } = action.payload;
    yield call(removeTeamMember, id);
  } catch (e) {
    console.error(e);
}
}

export default function* newTeamSaga() {
  yield takeLatest(CREATE_NEW_TEAM, createTeamSaga);
  yield takeLatest(REMOVE_TEAM_MEMBER, deleteTeamMemberSaga);
}







