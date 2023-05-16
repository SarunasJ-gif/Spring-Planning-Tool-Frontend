import { all } from 'redux-saga/effects';
import  newSprintSaga  from './NewSprint/NewSprint.sagas';
import { getSprintSaga } from './Sprint/Sprint.sagas';

export default function* rootSaga() {
    yield all([newSprintSaga(), getSprintSaga()]);
}