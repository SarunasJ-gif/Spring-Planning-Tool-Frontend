import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { endSprint, getSprint, startSprint } from './SprintApi';
import {
  GET_SPRINT,
  GET_SPRINT_SUCCESS,
  GET_SPRINT_FAILURE,
  START_SPRINT_SUCCESS,
  START_SPRINT_FAILURE,
  END_SPRINT_SUCCESS,
  END_SPRINT_FAILURE,
} from './SprintActionType';
import { Sprint } from '../../types/NewSprintTypes';

export function* getSprintSaga(){
  try {
    const sprint: Sprint[] = yield call(getSprint);
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

export function* startSprintSaga(action: any): Generator<Effect> {
  try {
    yield call(startSprint, action.id);
    yield put({
      type: START_SPRINT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: START_SPRINT_FAILURE,
    });
  }
}

export function* endSprintSaga(action: any): Generator<Effect> {
  try {
    yield call(endSprint, action.id);
    yield put({
      type: END_SPRINT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: END_SPRINT_FAILURE,
    });
  }
}

export default function* newSprintSaga() {
  yield takeLatest(GET_SPRINT, getSprintSaga);
  yield takeLatest(START_SPRINT_SUCCESS, startSprintSaga);
  yield takeLatest(END_SPRINT_SUCCESS, endSprintSaga);
}
