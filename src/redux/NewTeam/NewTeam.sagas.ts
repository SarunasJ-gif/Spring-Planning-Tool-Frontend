import { call, takeLatest } from 'redux-saga/effects';
import { CREATE_NEW_TEAM, REMOVE_TEAM_MEMBER, GET_TEAM_DATA } from './NewTeamActionType';
import { createNewTeam, getTeamData, removeTeamMember } from './NewTeamApi';

export function* createTeamSaga(action: any) {
  try {
      yield call(createNewTeam, action.payload);
  } catch (e) {
    console.error(e);
}
}

export function* getTeamDataSaga() {
  try {
      yield call(getTeamData);
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
  yield takeLatest(GET_TEAM_DATA, getTeamDataSaga);
  yield takeLatest(REMOVE_TEAM_MEMBER, deleteTeamMemberSaga);
}







