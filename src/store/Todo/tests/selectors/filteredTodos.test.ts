import {describe, expect, it} from "@jest/globals";
import {FilterBy, Todo} from "src/store/Todo/types.ts";
import {ApplicationState} from "src/store/types.ts";
import {filteredTodos} from "src/store/Todo/selectors.ts";

const mockState = (
    todos: Todo[],
    filterBy: Nullable<FilterBy>
): ApplicationState => ({
    todos_page: {
        todos,
        filterBy,
        isLoading: ''
    },
});

describe('filteredTodos selector', () => {
    it('only completed todos', () => {
        const state = mockState(
            [
                { id: 1, isCompleted: true, text: 'Task 1' },
                { id: 2, isCompleted: false, text: 'Task 2' },
                { id: 3, isCompleted: true, text: 'Task 3' },
            ],
            FilterBy.completed
        );

        const result = filteredTodos(state);
        expect(result).toEqual([
            { id: 1, isCompleted: true, text: 'Task 1' },
            { id: 3, isCompleted: true, text: 'Task 3' },
        ]);
    });

    it('only not completed todos', () => {
        const state = mockState(
            [
                { id: 1, isCompleted: true, text: 'Task 1' },
                { id: 2, isCompleted: false, text: 'Task 2' },
                { id: 3, isCompleted: true, text: 'Task 3' },
            ],
            FilterBy.notCompleted
        );

        const result = filteredTodos(state);
        expect(result).toEqual([
            { id: 2, isCompleted: false, text: 'Task 2' },
        ]);
    });

    it('all todos', () => {
        const state = mockState(
            [
                { id: 1, isCompleted: true, text: 'Task 1' },
                { id: 2, isCompleted: false, text: 'Task 2' },
                { id: 3, isCompleted: true, text: 'Task 3' },
            ],
            null
        );

        const result = filteredTodos(state);
        expect(result).toEqual(state.todos_page.todos);
    });

    it('empty array if no todos match the filter', () => {
        const state = mockState(
            [
                { id: 1, isCompleted: true, text: 'Task 1' },
                { id: 2, isCompleted: true, text: 'Task 2' },
            ],
            FilterBy.notCompleted
        );

        const result = filteredTodos(state);
        expect(result).toEqual([]);
    });

    it('empty array if no todos match the filter (other case)', () => {
        const state = mockState(
            [
                { id: 1, isCompleted: false, text: 'Task 1' },
                { id: 2, isCompleted: false, text: 'Task 2' },
            ],
            FilterBy.completed
        );

        const result = filteredTodos(state);
        expect(result).toEqual([]);
    });
});