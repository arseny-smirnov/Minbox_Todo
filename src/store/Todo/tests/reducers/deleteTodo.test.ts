import {describe, expect, it} from "@jest/globals";
import {ApplicationState} from "src/store/types.ts";
import {deleteTodo} from "src/store/Todo/reducer.ts";

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

describe('deleteTodo reducer', () => {
    it('do nothing with wrong id', () => {
        const action = {
            type: 'DELETE_TODO',
            payload: { id: 999 },
        };

        const state = { ...initialState };

        deleteTodo(state.todos_page, action);

        expect(state.todos_page.todos.length).toBe(3);
        expect(state.todos_page.todos[0].id).toBe(0);
        expect(state.todos_page.todos[1].id).toBe(1);
        expect(state.todos_page.todos[2].id).toBe(2);
    });

    it('delete the todo', () => {
        const action = {
            type: 'DELETE_TODO',
            payload: { id: 1 },
        };

        const state = { ...initialState };

        deleteTodo(state.todos_page, action);

        expect(state.todos_page.todos.length).toBe(2);
        expect(state.todos_page.todos.find(todo => todo.text === 'Task 2')).toBeUndefined();

        expect(state.todos_page.todos[0].id).toBe(0);
        expect(state.todos_page.todos[1].id).toBe(1);
    });

    it('delete when there is only one todo', () => {
        const action = {
            type: 'DELETE_TODO',
            payload: { id: 0 },
        };

        const state: ApplicationState = {
            todos_page: {
                todos: [
                    {
                        id: 0,
                        text: 'Task 1',
                        isCompleted: false
                    }
                    ],
                filterBy: null,
                isLoading: ''
            }
        };

        deleteTodo(state.todos_page, action);

        expect(state.todos_page.todos.length).toBe(0);
    });
});