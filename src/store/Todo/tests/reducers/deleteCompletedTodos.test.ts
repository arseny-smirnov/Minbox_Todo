import {describe, expect, it} from "@jest/globals";
import {ApplicationState} from "src/store/types.ts";
import {deleteCompletedTodos} from "src/store/Todo/reducer.ts";
import {Todo} from "src/store/Todo/types.ts";

const mockState = (todos: Todo[]): ApplicationState => ({
    todos_page: {
        filterBy: null,
        todos,
        isLoading: ''
    },
});

const action = {
    type: 'DELETE_COMPLETED_TODO',
    payload: null,
};

describe('deleteCompletedTodos reducer', () => {
    it('delete all completed todos', () => {
        const state = mockState([
            { id: 0, text: 'Task 1', isCompleted: false },
            { id: 1, text: 'Task 2', isCompleted: true },
            { id: 2, text: 'Task 3', isCompleted: false },
        ]);

        deleteCompletedTodos(state.todos_page, action);

        expect(state.todos_page.todos.length).toBe(2);
        expect(state.todos_page.todos.find(todo => todo.text === 'Task 2')).toBeUndefined();
        expect(state.todos_page.todos[0].id).toBe(0);
        expect(state.todos_page.todos[1].id).toBe(1);
    });

    it('don`t change anything with no completed todos', () => {
        const state = mockState([
                    { id: 0, text: 'Task 1', isCompleted: false },
                    { id: 1, text: 'Task 2', isCompleted: false },
                    { id: 2, text: 'Task 3', isCompleted: false },
                ])

        deleteCompletedTodos(state.todos_page, action);

        expect(state.todos_page.todos.length).toBe(3);
        expect(state.todos_page.todos[0].id).toBe(0);
        expect(state.todos_page.todos[1].id).toBe(1);
        expect(state.todos_page.todos[2].id).toBe(2);
    });

    it('delete all completed todos', () => {
        const state = mockState([
                    { id: 0, text: 'Task 1', isCompleted: true },
                    { id: 1, text: 'Task 2', isCompleted: true },
                    { id: 2, text: 'Task 3', isCompleted: true },
                ])

        deleteCompletedTodos(state.todos_page, action);

        expect(state.todos_page.todos.length).toBe(0);
    });
});