import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./root_reducer.ts";
import {rootSaga} from "./root_saga.ts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export default store