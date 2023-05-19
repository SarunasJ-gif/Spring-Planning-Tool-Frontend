import { call, put, takeLatest } from 'redux-saga/effects';
import { getSelectedSprintApi, getSprintsApi } from './SprintsApi';
import { GET_SELECTED_SPRINT, GET_SPRINTS_REQUEST } from './SprintsActionType';
import { getSprintsSuccess } from './SprintsActions';
import { Sprint } from '../../types/NewSprintTypes';
import { getSprintSuccess } from '../Sprint/SprintActions';

export function* getSprintsSaga() {
    try {
        const sprints: Sprint[] = yield call(getSprintsApi);
        yield put(getSprintsSuccess(sprints));
    } catch (error) { console.error(error) };
}

export function* getSelectedSprintSaga(action: { type: number, payload: number }) {
    try {
        const sprint: Sprint = yield call(getSelectedSprintApi, action.payload);
        yield put(getSprintSuccess(sprint));
    } catch (error) { console.error(error) }
}

export default function* newSprintsSaga() {
    yield takeLatest(GET_SPRINTS_REQUEST, getSprintsSaga);
    yield takeLatest(GET_SELECTED_SPRINT, getSelectedSprintSaga);
}