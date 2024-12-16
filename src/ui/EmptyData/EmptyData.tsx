import {Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'

export const EmptyData = () => {
    return (
        <div className="empty-data-container">
            <SearchIcon />
            <Typography variant="body2">Список задач пуст</Typography>
        </div>
    );
};
