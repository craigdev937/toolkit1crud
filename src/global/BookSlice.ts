import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IBookState } from "../models/Interfaces";
import { API } from "./FetchAPI";

const initialState: IBookState = {
    books: [],
    loading: false,
    error: null
};

const BookSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [API.fetchAll.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.fetchAll.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.fetchAll.fulfilled.type]: 
        (state, action: PayloadAction<IBook[]>) => {
            state.loading = false,
            state.books = [...action.payload]
        },
    },
});

export const BookAction = BookSlice.actions;
export const BookReducer = BookSlice.reducer;



