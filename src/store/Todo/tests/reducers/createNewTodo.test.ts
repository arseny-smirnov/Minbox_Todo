import {createNewTodo} from "src/store/Todo/reducer.ts";
import {describe, expect, it} from "@jest/globals";
import {Todo} from "src/store/Todo/types.ts";
import {ApplicationState} from "src/store/types.ts";

const mockState = (todos: Todo[]): ApplicationState => ({
    todos_page: {
        filterBy: null,
        todos,
        isLoading: ''
    },
});

const newText = 'New Task';

describe('createNewTodo reducer', () => {
    it('add a new todo', () => {
        const action = {
            type: 'CREATE_NEW_TODO',
            payload: newText,
        };

        const state = mockState([])

        createNewTodo(state.todos_page, action);

        const newTodo: Todo = state.todos_page.todos[0];

        expect(state.todos_page.todos.length).toBe(1);
        expect(newTodo.text).toBe(newText);
        expect(newTodo.isCompleted).toBe(false);
        expect(newTodo.id).toBe(0);
    });

    it('increment the id when a new todo is added', () => {
        const action = {
            type: 'CREATE_NEW_TODO',
            payload: newText,
        };

        const state = mockState([{
                id: 0,
                text: '0',
                isCompleted: false
            }])

        createNewTodo(state.todos_page, action);

        const newTodo = state.todos_page.todos[1];

        expect(newTodo.id).toBe(1);
    });

    it('add multiple todos', () => {
        const action1 = {
            type: 'CREATE_NEW_TODO',
            payload: newText,
        };

        const action2 = {
            type: 'CREATE_NEW_TODO',
            payload: `${newText} 2`,
        };

        const state = mockState([])

        createNewTodo(state.todos_page, action1);
        createNewTodo(state.todos_page, action2);

        const newTodo = state.todos_page.todos[0];
        const newTodo2 = state.todos_page.todos[1];

        expect(state.todos_page.todos.length).toBe(2);
        expect(newTodo.id).toBe(0);
        expect(newTodo2.id).toBe(1);
        expect(newTodo.text).toBe(newText);
        expect(newTodo2.text).toBe(`${newText} 2`);
    });
});