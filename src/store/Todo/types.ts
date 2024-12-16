import {LoadingState} from "src/store/types.ts";

enum FilterBy {
    completed = 'completed',
    notCompleted = 'notCompleted',
}

type TodoResponseType = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

type TodoState = {
    todos: Todo[];
    filterBy: Nullable<FilterBy>
    isLoading: LoadingState | ''
}

type Todo = {
    id: number;
    text: string;
    isCompleted: boolean;
}

export {
    FilterBy
}

export type {
    TodoState,
    Todo,
    TodoResponseType,
}