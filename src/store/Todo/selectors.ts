import {ApplicationState, LoadingState} from "src/store/types";
import {FilterBy, TodoState} from "./types";
import {isEmpty} from "ramda";
import {createSelector} from "@reduxjs/toolkit";

const todosState = (state:ApplicationState): TodoState =>
    state.todos_page;

const loadingState = (state: ApplicationState): LoadingState | '' =>
    state.todos_page.isLoading;

export const filteredTodos = createSelector(
    [todosState],
    ({todos, filterBy}) => {
        if (filterBy === FilterBy.completed)
            return todos.filter((el) => el.isCompleted)

        if (filterBy === FilterBy.notCompleted)
            return todos.filter((el) => !el.isCompleted)

        return todos;
    }
)

export const activeTodosCount = createSelector(
    [todosState],
    ({todos}) => todos?.filter((el) => !el.isCompleted).length
)

export const disableDeleteCompletedBtn = createSelector(
    [todosState],
    ({todos}) => isEmpty(todos?.filter((el) => el.isCompleted))
)

const todoSelectors = {
    loadingState,
    filteredTodos,
    activeTodosCount,
    disableDeleteCompletedBtn,
}

export default todoSelectors;