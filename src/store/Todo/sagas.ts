import {call, all, takeLatest, put} from "redux-saga/effects";
import {GeneratorSagaType} from "src/store/types.ts";
import todoActions from "src/store/Todo/actions.ts";
import axios, {AxiosResponse} from "axios";
import {Todo, TodoResponseType} from "src/store/Todo/types.ts";

export function* getTodosDataWorker() {
    try {
        const response: AxiosResponse<TodoResponseType[]> = yield call(() => (
            axios.get('https://jsonplaceholder.typicode.com/todos'))
        )

        if (response.status === 200) {
            const updatedData: Todo[] = response.data
                .slice(0, 5)
                .map((el) => ({
                    id: el.id - 1,
                    text: el.title,
                    isCompleted: el.completed,
                }))

            yield put(todoActions.getTodoDataSuccess(updatedData))
        } else throw new Error()
    } catch(e) {
        yield put(todoActions.getTodoDataFail())
    }
}

function* todoSaga(): GeneratorSagaType<never> {
    yield all([
        takeLatest(todoActions.getTodoData ,getTodosDataWorker)
    ])
}

export default todoSaga;