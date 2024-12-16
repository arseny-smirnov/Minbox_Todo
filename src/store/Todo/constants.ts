import {TodoState} from "./types.ts";

export const helperText = 'Для сохранения нажмите "Enter"'
export const maxInputLength = 70;

export const initialState: TodoState = {
    todos: [],
    filterBy: null,
    isLoading: '',
}

export const nameReducer = 'Todo';