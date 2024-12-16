import {LoadingState, ReducerFunction} from "src/store/types.ts";
import {FilterBy, Todo} from "./types.ts";

const getTodoData: ReducerFunction = (state) => {
    state.isLoading = LoadingState.Loading
}

const getTodoDataSuccess: ReducerFunction<Todo[]> = (state, {payload}) => {
    state.isLoading = LoadingState.Resolve
    state.todos = payload;
}

const getTodoDataFail: ReducerFunction = (state) => {
    state.isLoading = LoadingState.Reject
}

export const createNewTodo: ReducerFunction<string> = (state, { payload }) => {
    const newTodo: Todo = {
        id: state.todos.length,
        text: payload,
        isCompleted: false
    }

    state.todos.push(newTodo);
}

export const changeIsCompleted: ReducerFunction<{
    id: number;
    updatedIsCompleted: boolean;
}> = (state, {payload}) => {
    const {id, updatedIsCompleted} = payload;

    state.todos[id].isCompleted = updatedIsCompleted
}

export const deleteTodo: ReducerFunction<{ id: number }> = (state, {payload}) => {
    state.todos = state.todos
        .filter((el) => el.id !== payload.id)
        .map((el, index) => ({
            ...el,
            id: index
        }))
}

export const editTodoText: ReducerFunction<{
    id: number;
    updatedText: string;
}> = (state, {payload}) => {
    const {id, updatedText} = payload;

    state.todos[id].text = updatedText;
}

export const deleteCompletedTodos: ReducerFunction = (state) => {
    state.todos = state.todos
        .filter((el) => !el.isCompleted)
        .map((el, index) => ({
            ...el,
            id: index
        }))
}

const changeFilterBy: ReducerFunction<Nullable<FilterBy>> = (state, {payload}) => {
    state.filterBy = payload;
}

const reducers = {
    getTodoData,
    getTodoDataSuccess,
    getTodoDataFail,
    createNewTodo,
    changeIsCompleted,
    deleteTodo,
    editTodoText,
    deleteCompletedTodos,
    changeFilterBy,
}

export default reducers;