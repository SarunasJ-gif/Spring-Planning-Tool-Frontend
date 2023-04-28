import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import {
  CREATE_SPRINT_FAILURE,
  CREATE_SPRINT_REQUEST,
  CREATE_SPRINT_SUCCESS
} from './NewSprintActionType';

function* createSprintSaga(action: { payload: unknown; }): Generator<any, any, any> {
  try {
    const response = yield call(axios.post, '/sprint', action.payload);
    yield put({ type: CREATE_SPRINT_SUCCESS, payload: response.data });
  } catch (e) {
    const error = e as Error;
    yield put({ type: CREATE_SPRINT_FAILURE, error: error.message });
  }
}

export default function* watchCreateSprint() {
  yield takeLatest(CREATE_SPRINT_REQUEST, createSprintSaga);
}
