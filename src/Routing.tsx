import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./components";
import {NotFoundPage} from "src/ui";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/mindbox-todo" element={<Main />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}