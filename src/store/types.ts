import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";

import store from "./index";
import rootReducer from "./reducer";

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type DispatchExt = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunk = ThunkAction<Promise<any>, RootState, unknown, AnyAction>;
