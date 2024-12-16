import {Fragment, useMemo} from "react";
import {useSelector} from "react-redux";
import todoSelectors from "src/store/Todo/selectors.ts";
import {TodoItem} from "./TodoItem";
import {LoadingState} from "src/store/types.ts";
import {isEmpty} from "ramda";
import {EmptyData, Exception, Loader} from "src/ui";
import "./styles.css"

export const TodosList = () => {
    const todos = useSelector(todoSelectors.filteredTodos)
    const loadingState = useSelector(todoSelectors.loadingState);

    const content = useMemo(() => {
        if (loadingState === LoadingState.Loading ) {
            return <Loader />
        }

        if (isEmpty(todos)) {
            return <EmptyData />
        }

        return todos?.map((todo, index) => (
            <Fragment key={index}>
                <TodoItem todo={todo} />
            </Fragment>
        ))
    }, [loadingState, todos])

    return (
        <div className="list-container">
            {content}
            {loadingState === LoadingState.Reject && <Exception />}
        </div>
    );
};
