import { all } from 'redux-saga/effects';
import  createNewSprint  from '../redux/NewSprint/NewSprint.sagas';

export default function* sagas() {
    yield all([
        createNewSprint,
    ]);
}