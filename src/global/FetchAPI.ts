import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBook } from "../models/Interfaces";

const URL = "https://book5-restapi.herokuapp.com/api";

class FetchClass {
    fetchAll = createAsyncThunk("books/fetchAll", 
    async () => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const books: IBook[] = await res.json();
        return [...books];
    });

    create = createAsyncThunk("book/create", 
    async (payload: IBook) => {
        const res: Response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const book: IBook = await res.json();
        return book;
    });

    update = createAsyncThunk("book/update", 
    async (payload: IBook) => {
        const res: Response = 
        await fetch(`${URL}/${payload._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const book: IBook = await res.json();
        // return book;  <== This OR
        return {
            _id: book._id, title: book.title, 
            first: book.first, last: book.last, 
            age: book.age, info: book.info
        };
    });

    delete = createAsyncThunk("book/delete", 
    async (payload: IBook) => {
        const res: Response = 
        await fetch(`${URL}/${payload._id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    });
};

export const API: FetchClass = new FetchClass();




