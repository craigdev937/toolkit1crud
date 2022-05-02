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
};

export const API: FetchClass = new FetchClass();




