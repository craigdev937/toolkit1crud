import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "./BookSlice";

export const RootReducer = configureStore({
    reducer: {
        books: BookReducer,
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;



