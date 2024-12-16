import {GeneratorSagaType} from "src/store/types.ts";
import {all, fork} from 'redux-saga/effects'
import todoSaga from "src/store/Todo/sagas";

export function* rootSaga(): GeneratorSagaType {
    yield all([
        fork(todoSaga)
    ])
}