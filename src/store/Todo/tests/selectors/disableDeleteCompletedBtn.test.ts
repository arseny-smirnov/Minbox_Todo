import {describe, expect, it} from "@jest/globals";
import {disableDeleteCompletedBtn} from 'src/store/Todo/selectors'
import {Todo} from "src/store/Todo/types";
import {ApplicationState} from "src/store/types.ts";

const mockState = (todos: Todo[]): ApplicationState => ({
    todos_page: {
        filterBy: null,
        todos,
        isLoading: ''
    },
});

describe('disableDeleteCompletedBtn selector', () => {
    it('todos are not completed', () => {
        const state = mockState([
            { id: 1, isCompleted: false, text: 'Task 1' },
            { id: 2, isCompleted: false, text: 'Task 2' },
        ]);

        const result = disableDeleteCompletedBtn(state);
        expect(result).toBeTruthy();
    });

    it('one of todos is completed', () => {
        const state = mockState([
            { id: 1, isCompleted: false, text: 'Task 1' },
            { id: 2, isCompleted: true, text: 'Task 2' },
        ]);

        const result = disableDeleteCompletedBtn(state);
        expect(result).toBeFalsy();
    });

    it('all todos are completed', () => {
        const state = mockState([
            { id: 1, isCompleted: true, text: 'Task 1' },
            { id: 2, isCompleted: true, text: 'Task 2' },
        ]);

        const result = disableDeleteCompletedBtn(state);
        expect(result).toBeFalsy()
    });

    it('todos array is empty', () => {
        const state = mockState([]);

        const result = disableDeleteCompletedBtn(state);
        expect(result).toBeTruthy()
    });
});