import {ApplicationState} from "src/store/types.ts";
import {describe, expect, it} from "@jest/globals";
import {changeIsCompleted} from "src/store/Todo/reducer.ts";

const initialState: ApplicationState = {
    todos_page: {
        todos: [
            { id: 0, text: 'Task 1', isCompleted: false },
            { id: 1, text: 'Task 2', isCompleted: true },
        ],
        filterBy: null,
        isLoading: ''
    },
};

describe('changeIsCompleted reducer', () => {
    it('update isCompleted to true', () => {
        const action = {
            type: 'CHANGE_IS_COMPLETED',
            payload: { id: 0, updatedIsCompleted: true },
        };

        const state = { ...initialState };

        changeIsCompleted(state.todos_page, action);

        expect(state.todos_page.todos[0].isCompleted).toBeTruthy()
    });

    it('update isCompleted to false', () => {
        const action = {
            type: 'CHANGE_IS_COMPLETED',
            payload: { id: 1, updatedIsCompleted: false },
        };

        const state = { ...initialState };

        changeIsCompleted(state.todos_page, action);

        expect(state.todos_page.todos[1].isCompleted).toBeFalsy()
    });

    it('update the correct task', () => {
        const action1 = {
            type: 'CHANGE_IS_COMPLETED',
            payload: { id: 0, updatedIsCompleted: true },
        };

        const action2 = {
            type: 'CHANGE_IS_COMPLETED',
            payload: { id: 1, updatedIsCompleted: false },
        };

        const state = { ...initialState };

        changeIsCompleted(state.todos_page, action1);
        changeIsCompleted(state.todos_page, action2);

        expect(state.todos_page.todos[0].isCompleted).toBeTruthy()
        expect(state.todos_page.todos[1].isCompleted).toBeFalsy()
    });
});