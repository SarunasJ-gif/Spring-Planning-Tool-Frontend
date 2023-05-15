import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_NEW_SPRINT } from './NewSprintActionType';
import { createSprint } from './NewSprintApi';
import {
  createNewSprintSuccess,
  clearNewSprintState,
} from './NewSprintActions';

export function* createSprintSaga(action: any) {
  try {
    yield call(createSprint, action.payload);
    yield put(createNewSprintSuccess());
    yield put(clearNewSprintState());
  } catch (e) {
    console.error(e);
  }
}
export default function* newSprintSaga() {
  yield takeLatest(CREATE_NEW_SPRINT, createSprintSaga);
}
