import { call, put, takeLatest } from 'redux-saga/effects';
import { getSprint } from './SprintApi';
import {
  GET_SPRINT,
  GET_SPRINT_SUCCESS,
  GET_SPRINT_FAILURE,
} from './SprintActionType';
import { Sprint } from '../../types/NewSprintTypes';

export function* getSprintSaga(){
  try {
    const sprint : Sprint[] = yield call(getSprint);
    yield put({
      type: GET_SPRINT_SUCCESS,
      payload: sprint,
    });
  } catch (error) {
    yield put({
      type: GET_SPRINT_FAILURE,
      payload: error,
    });
  }
}

export default function* newSprintSaga() {
  yield takeLatest(GET_SPRINT, getSprintSaga);
}
