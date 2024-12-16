import {CreateNewTodo} from "./CreateNewTodo";
import {TodosList} from "./TodosList";
import {Filters} from "./Filters";
import './styles.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import todoActions from "src/store/Todo/actions.ts";

export const Todos = () => {
    const dispatch = useDispatch();

    // Для отключения запроса закомментировать UseEffect
    useEffect(() => {
        dispatch(todoActions.getTodoData())
    }, [])

    return (
        <div className="todos-container">
            <CreateNewTodo />
            <TodosList />
            <Filters />
        </div>
    );
};
