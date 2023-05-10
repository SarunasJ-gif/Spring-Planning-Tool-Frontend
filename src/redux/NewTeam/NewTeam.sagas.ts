import { call, takeLatest } from 'redux-saga/effects';
import { CREATE_NEW_TEAM,  GET_TEAM_DATA } from './NewTeamActionType';
import { createNewTeam, getTeamData } from './NewTeamApi';


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



export default function* newTeamSaga() {
  yield takeLatest(CREATE_NEW_TEAM, createTeamSaga);
  yield takeLatest(GET_TEAM_DATA, getTeamDataSaga);

}







