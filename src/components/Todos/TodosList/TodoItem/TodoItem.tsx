import {FC} from "react";
import {Typography, Checkbox, IconButton, Tooltip, TextField} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import {Todo} from "src/store/Todo/types.ts";
import {useTodoItemHandlers} from "./hooks";
import '../styles.css'

export const TodoItem: FC<{
    todo: Todo
}> = ({todo}) => {
    const {text, isCompleted} = todo;

    const {
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
    } = useTodoItemHandlers({...todo})

    return (
        <div className="item-container">
            <Checkbox checked={isCompleted} onClick={onClickCheckbox} />
            {isEditing ? (
                <>
                    <TextField
                        size="small"
                        value={editableValue}
                        onChange={onChangeInputValue}
                        onKeyDown={onKeyDown}
                    />
                    <div>
                        <Tooltip title="Сохранить" placement="top">
                            <span>
                                <IconButton
                                    onClick={onClickDoneIcon}
                                    disabled={disableSaveIcon}
                                >
                                <DoneIcon />
                            </IconButton>
                            </span>
                        </Tooltip>
                        <Tooltip title="Отменить" placement="top">
                            <IconButton onClick={handleEndEditing}>
                                <ClearIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </>
            ) : (
                <>
                    <Typography
                        variant="body2"
                        className={isCompleted ? 'crossed-text' : undefined}
                    >
                        {text}
                    </Typography>
                    <div>
                        <Tooltip title="Редактировать" placement="top">
                            <IconButton onClick={handleStartEditing}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Удалить" placement="top">
                            <IconButton onClick={onClickClearIcon}>
                                <ClearIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </>
            )}
        </div>
    );
};
