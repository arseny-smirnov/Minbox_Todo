import {SyntheticEvent, useState} from "react";
import {IconButton, Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const Exception = () => {
    const [open, setOpen] = useState(true);

    const handleClose = (
        event: SyntheticEvent | Event,
    ) => {
        setOpen(false);
    };

    const action = (
        <IconButton
            size="small"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message="При выполнении запроса произошла ошибка"
            action={action}
        />
    );
}