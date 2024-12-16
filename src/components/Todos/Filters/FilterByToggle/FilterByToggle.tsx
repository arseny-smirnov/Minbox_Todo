import {useState, MouseEvent} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {FilterBy} from "src/store/Todo/types.ts";
import {useDispatch} from "react-redux";
import todoActions from "src/store/Todo/actions.ts";
import {isEmpty} from "ramda";

export const FilterByToggle = () => {
    const dispatch = useDispatch();
    const [selectedToggle, setSelectedToggle] = useState<FilterBy | ''>('');

    const handleAlignment = (
        event: MouseEvent<HTMLElement>,
        newSelected: Nullable<FilterBy>,
    ) => {
        setSelectedToggle(newSelected);
        dispatch(todoActions.changeFilterBy(
            isEmpty(newSelected) ? null : newSelected)
        );

    };

    return (
        <ToggleButtonGroup
            value={selectedToggle}
            exclusive
            onChange={handleAlignment}
            size="small"
        >
            <ToggleButton value="">
                Все
            </ToggleButton>
            <ToggleButton value={FilterBy.notCompleted}>
                Активные
            </ToggleButton>
            <ToggleButton value={FilterBy.completed}>
                Выполненные
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
