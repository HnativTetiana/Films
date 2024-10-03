import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducer"
import initialState from "./initialState";

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
