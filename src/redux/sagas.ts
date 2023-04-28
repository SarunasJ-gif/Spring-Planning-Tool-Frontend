import { all } from 'redux-saga/effects';
import  createSprintSaga  from '../redux/NewSprint/NewSprint.sagas';

export default function* sagas() {
    yield all([
        createSprintSaga,
    ]);
}