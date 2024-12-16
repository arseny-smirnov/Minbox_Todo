import {CircularProgress} from "@mui/material";
import './styles.css'

export const Loader = () => {
    return (
        <div className="loader-container">
            <CircularProgress />
        </div>
    );
};
