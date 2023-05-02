import { call, takeLatest } from "redux-saga/effects";
import { CREATE_NEW_SPRINT } from "./NewSprintActionType";
import { createSprint } from "./NewSprintApi";

export function* createSprintSaga(action:any) {
    try {
         console.log("pradedama SAGA", action);
        yield call(createSprint, action.payload);
       
    } catch (e) {
        console.error(e);
    }
}

export default function* newSprintSaga() {
  yield takeLatest(CREATE_NEW_SPRINT, createSprintSaga);
}
