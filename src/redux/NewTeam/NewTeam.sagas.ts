import { call, takeLatest } from 'redux-saga/effects';
import {  GET_TEAM_DATA } from './NewTeamActionType';
import {  getTeamData } from './NewTeamApi';

export function* getTeamDataSaga() {
  try {
      yield call(getTeamData);
  } catch (e) {
    console.error(e);
}
}

//update

export default function* newTeamSaga() {
  yield takeLatest(GET_TEAM_DATA, getTeamDataSaga);
}







