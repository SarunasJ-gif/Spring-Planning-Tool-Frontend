import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { getSprints } from './SprintsApi';
import {
    GET_SPRINTS,
    GET_SPRINTS_SUCCESS,
    GET_SPRINTS_FAILURE,
} from './SprintsActionType';

export function* getSprintsSaga(action: any): Generator<Effect> {
    try {
        const sprints = yield call(getSprints, action.payload);
        yield put({
            type: GET_SPRINTS_SUCCESS,
            payload: sprints,
        });
    } catch (error) {
        yield put({
            type: GET_SPRINTS_FAILURE,
            payload: error,
        });
    }
}

export default function* newSprintsSaga() {
    yield takeLatest(GET_SPRINTS, getSprintsSaga);
}