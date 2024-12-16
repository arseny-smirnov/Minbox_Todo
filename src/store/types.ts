import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {AllEffect, ForkEffect} from "redux-saga/effects"
import {TodoState} from "./Todo/types.ts";

enum LoadingState {
    Loading = 'Loading',
    Resolve = 'Resolve',
    Reject = 'Reject'
}

type GeneratorSagaType<T = void | never> = Generator<
    AllEffect<ForkEffect<T>> | ForkEffect<T>,
    void,
    unknown
>

type ReducerFunction<T = null | undefined> = CaseReducer<
    TodoState,
    PayloadAction<T>
>

type ApplicationState = {
    todos_page: TodoState
}

export {
    LoadingState
}

export type {
    GeneratorSagaType,
    ReducerFunction,
    ApplicationState,
}