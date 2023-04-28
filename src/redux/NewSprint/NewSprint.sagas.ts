import { call, takeLatest } from "redux-saga/effects";
import { CREATE_NEW_SPRINT } from "./NewSprintActionType";
import { createSprint } from "./NewSprintApi";

export function* createSprintSaga(action:any) {
    try {
        yield call(createSprint, action.payload);
    } catch (e) {
        console.error(e);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeLatest(CREATE_NEW_SPRINT, createSprintSaga);
}
