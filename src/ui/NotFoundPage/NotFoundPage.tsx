import {Link, Typography} from "@mui/material";
import './styles.css'

export const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <Typography variant="body1">Страница не найдена</Typography>
            <Link href={"/mindbox-todo"}>Вернуться на главную</Link>
        </div>
    )
}