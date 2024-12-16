import {Todo} from "src/store/Todo/types.ts";
import {ApplicationState} from "src/store/types.ts";
import {describe, expect, it} from "@jest/globals";
import {activeTodosCount} from "src/store/Todo/selectors.ts";

const mockState = (todos: Todo[]): ApplicationState => ({
    todos_page: {
        filterBy: null,
        todos,
        isLoading: ''
    },
});

describe('activeTodosCount selector', () => {
    it('no active todos', () => {
        const state = mockState([
            { id: 1, isCompleted: true, text: 'Task 1' },
            { id: 2, isCompleted: true, text: 'Task 2' },
        ]);

        const result = activeTodosCount(state);
        expect(result).toBe(0);
    });

    it('part of todos is active', () => {
        const state = mockState([
            { id: 1, isCompleted: false, text: 'Task 1' },
            { id: 2, isCompleted: true, text: 'Task 2' },
            { id: 3, isCompleted: false, text: 'Task 3' },
        ]);

        const result = activeTodosCount(state);
        expect(result).toBe(2);
    });

    it('no todos', () => {
        const state = mockState([]);

        const result = activeTodosCount(state);
        expect(result).toBe(0);
    });

    it('all todos are active', () => {
        const state = mockState([
            { id: 1, isCompleted: false, text: 'Task 1' },
            { id: 2, isCompleted: false, text: 'Task 2' },
        ]);

        const result = activeTodosCount(state);
        expect(result).toBe(2);
    });
});