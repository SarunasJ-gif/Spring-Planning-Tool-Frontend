import { all } from 'redux-saga/effects';
import  watchCreateSprint  from '../redux/NewSprint/NewSprint.sagas';

export default function* sagas() {
    yield all([
        watchCreateSprint(),
    ]);
}