import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./components";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/mindbox-todo" element={<Main />} />
                <Route path="/*" element={<Navigate to="/mindbox-todo" />} />
            </Routes>
        </BrowserRouter>
    )
}