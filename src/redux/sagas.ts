import { all } from 'redux-saga/effects';
import newSprintSaga from './NewSprint/NewSprint.sagas';
import newSprintsSaga from './Sprints/Sprints.sagas';

export default function* rootSaga() {
    yield all([
        newSprintSaga(), newSprintsSaga()
    ]);
}