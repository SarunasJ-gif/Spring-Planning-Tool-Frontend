import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { getSprint } from './SprintApi';
import {
  GET_SPRINT,
  GET_SPRINT_SUCCESS,
  GET_SPRINT_FAILURE,
} from './SprintActionType';

export function* getSprintSaga(action: any): Generator<Effect> {
  try {
    const sprint = yield call(getSprint, action.payload);
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
