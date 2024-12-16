import {Header, Todos} from "src/components";
import './index.css';

export const App = () => {
    return (
        <div className="main">
            <Header />
            <Todos />
        </div>
    )
}
