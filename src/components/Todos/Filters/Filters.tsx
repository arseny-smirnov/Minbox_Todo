import './styles.css'
import {Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import todoActions from "src/store/Todo/actions.ts";
import {FilterByToggle} from "./FilterByToggle";
import todoSelectors from "src/store/Todo/selectors.ts";

export const Filters = () => {
    const dispatch = useDispatch();

    const activeTodosCount = useSelector(todoSelectors.activeTodosCount);
    const disableDeleteCompletedBtn = useSelector(todoSelectors.disableDeleteCompletedBtn);

    const onDeleteCompleted = () => {
        dispatch(todoActions.deleteCompletedTodos())
    }

    return (
        <div className="filters-container">
            <Typography variant="subtitle1">
                Активных: {activeTodosCount}
            </Typography>
            <FilterByToggle />
            <Button
                size="small"
                variant="contained"
                onClick={onDeleteCompleted}
                disabled={disableDeleteCompletedBtn}
            >
                Удалить выполненные
            </Button>
        </div>
    );
};
