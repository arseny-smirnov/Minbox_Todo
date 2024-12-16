import {ApplicationState} from "src/store/types.ts";
import {describe, expect, it} from "@jest/globals";
import {editTodoText} from "src/store/Todo/reducer.ts";

const initialState: ApplicationState = {
    todos_page: {
        todos: [
            { id: 0, text: 'Task 1', isCompleted: false },
            { id: 1, text: 'Task 2', isCompleted: true },
            { id: 2, text: 'Task 3', isCompleted: false },
        ],
        filterBy: null,
        isLoading: ''
    },
};

describe('editTodoText reducer', () => {
    it('update text', () => {
        const action = {
            type: 'EDIT_TODO_TEXT',
            payload: { id: 0, updatedText: 'Updated Task 1' },
        };

        const state = { ...initialState };

        editTodoText(state.todos_page, action);

        expect(state.todos_page.todos[0].text).toBe('Updated Task 1');
    });

    it('update text for 2 different todos', () => {
        const action1 = {
            type: 'EDIT_TODO_TEXT',
            payload: { id: 1, updatedText: 'Updated Task 2' },
        };

        const action2 = {
            type: 'EDIT_TODO_TEXT',
            payload: { id: 2, updatedText: 'Updated Task 3' },
        };

        const state = { ...initialState };

        editTodoText(state.todos_page, action1);
        editTodoText(state.todos_page, action2);

        expect(state.todos_page.todos[1].text).toBe('Updated Task 2');
        expect(state.todos_page.todos[2].text).toBe('Updated Task 3');
    });

    it('change only text property', () => {
        const action = {
            type: 'EDIT_TODO_TEXT',
            payload: { id: 0, updatedText: 'Updated Task 1' },
        };

        const state = { ...initialState };

        editTodoText(state.todos_page, action);

        expect(state.todos_page.todos[0].isCompleted).toBe(false);
        expect(state.todos_page.todos[0].text).toBe('Updated Task 1');
    });
});