import {ChangeEvent, KeyboardEvent, useState} from "react";
import {isEmpty} from "ramda"
import {TextField} from "@mui/material";
import {clearStringFromSpaces} from "src/utils";
import {useDispatch, useSelector} from "react-redux";
import todoActions from "src/store/Todo/actions.ts";
import {helperText, maxInputLength} from "src/store/Todo/constants.ts";
import todoSelectors from "src/store/Todo/selectors.ts";
import {LoadingState} from "src/store/types.ts";

export const CreateNewTodo = () => {
    const dispatch = useDispatch();
    const loadingState = useSelector(todoSelectors.loadingState);

    const [value, setValue] = useState<string>('')
    const [showHelperText, setShowHelperText] = useState<boolean>(false)

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const clearStr = clearStringFromSpaces(event.target.value)
        if (clearStr.length > maxInputLength) return;

        if (isEmpty(clearStr))
            setShowHelperText(false)
        else setShowHelperText(true)

        setValue(clearStr)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            if (isEmpty(value)) return;

            dispatch(todoActions.createNewTodo(value.trim()))
            setValue('')
            setShowHelperText(false)
        }
    }

    return (
        <>
            <TextField
                variant="filled"
                placeholder="Введите название задачи"
                label={showHelperText ? helperText : undefined}
                fullWidth
                value={value}
                onChange={onChangeInputValue}
                onKeyDown={onKeyDown}
                disabled={loadingState === LoadingState.Loading}
            />
        </>
    );
};
