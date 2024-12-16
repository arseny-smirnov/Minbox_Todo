import {combineReducers} from "@reduxjs/toolkit";
import todoSlice from "./Todo";

export const rootReducer = combineReducers({
    todos_page: todoSlice.reducer
})