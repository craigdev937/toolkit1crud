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
        [API.create.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.create.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.create.fulfilled.type]: 
        (state, action: PayloadAction<IBook>) => {
            state.loading = false,
            state.books.push(action.payload)
        },
        [API.update.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.update.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.update.fulfilled.type]:
        (state, action: PayloadAction<IBook>) => {
            state.loading = false;
            const index = state.books.findIndex(
                (book) => book._id === action.payload._id);
            state.books[index].title = action.payload.title,
            state.books[index].first = action.payload.first,
            state.books[index].last = action.payload.last,
            state.books[index].age = action.payload.age,
            state.books[index].info = action.payload.info
        },
        [API.delete.rejected.type]: (state, action) => {
            state.loading = false,
            state.error = action.payload
        },
        [API.delete.pending.toString()]: (state) => {
            state.loading = true
        },
        [API.delete.fulfilled.type]: 
        (state, action: PayloadAction<IBook>) => {
            state.loading = false,
            state.books.filter(
                (book) => book._id !== action.payload._id);
        }
    },
});

export const BookAction = BookSlice.actions;
export const BookReducer = BookSlice.reducer;



