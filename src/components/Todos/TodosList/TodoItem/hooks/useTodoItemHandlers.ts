import todoActions from "src/store/Todo/actions.ts";
import {isEmpty} from "ramda";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {clearStringFromSpaces} from "src/utils";
import {maxInputLength} from "src/store/Todo/constants.ts";
import {useDispatch} from "react-redux";

type TodoItemHandlersProps = {
    id: number;
    text: string;
    isCompleted: boolean;
}

type TodoItemHandlersReturn = {
    isEditing: boolean;
    editableValue: string;
    disableSaveIcon: boolean;
    onClickCheckbox: () => void;
    handleStartEditing: () => void;
    handleEndEditing: () => void;
    onClickClearIcon: () => void;
    onClickDoneIcon: () => void;
    onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const useTodoItemHandlers = (
    {id, text, isCompleted}: TodoItemHandlersProps
): TodoItemHandlersReturn => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [disableSaveIcon, setDisableSaveIcon] = useState<boolean>(true)
    const [editableValue, setEditableValue] = useState<string>('')

    const onClickCheckbox = () => {
        dispatch(todoActions.changeIsCompleted({
            id,
            updatedIsCompleted: !isCompleted
        }))
    }

    const handleStartEditing = () => {
        setEditableValue(text)
        setIsEditing(true)
    }

    const handleEndEditing = () => {
        setIsEditing(false)
    }

    const onClickClearIcon = () => {
        dispatch(todoActions.deleteTodo({id}))
    }

    const onClickDoneIcon = () => {
        handleEndEditing()
        setDisableSaveIcon(true)

        if (isEmpty(editableValue)) {
            dispatch(todoActions.deleteTodo({id}))
        } else {
            dispatch(todoActions.editTodoText({
                id,
                updatedText: editableValue.trim()
            }))
        }
    }

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const clearStr = clearStringFromSpaces(event.target.value)

        if (clearStr.length > maxInputLength) return;
        setDisableSaveIcon(false)

        if (clearStr.trim() === text) setDisableSaveIcon(true)

        setEditableValue(clearStr)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            onClickDoneIcon()
        }
    }

    return {
        isEditing,
        editableValue,
        disableSaveIcon,
        onClickCheckbox,
        handleStartEditing,
        handleEndEditing,
        onClickClearIcon,
        onClickDoneIcon,
        onChangeInputValue,
        onKeyDown,
    }
}