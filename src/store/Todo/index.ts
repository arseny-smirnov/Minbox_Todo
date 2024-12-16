import {createSlice} from "@reduxjs/toolkit";
import {initialState, nameReducer} from "./constants.ts";
import reducers from "./reducer.ts";

const todoSlice = createSlice({
    initialState,
    name: nameReducer,
    reducers,
})

export default todoSlice;