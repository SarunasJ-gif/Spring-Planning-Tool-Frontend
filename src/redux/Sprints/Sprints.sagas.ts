import { call, put, takeLatest } from 'redux-saga/effects';
import { getSprintsApi } from './SprintsApi';
import { GET_SPRINTS_REQUEST } from './SprintsActionType';
import { getSprintsSuccess } from './SprintsActions';
import { Sprint } from '../../types/NewSprintTypes';

export function* getSprintsSaga() {
    try {
        const sprints: Sprint[] = yield call(getSprintsApi);
        yield put(getSprintsSuccess(sprints));
    } catch (error) { console.error(error) };
}

export default function* newSprintsSaga() {
    yield takeLatest(GET_SPRINTS_REQUEST, getSprintsSaga);
}